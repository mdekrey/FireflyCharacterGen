/// <reference path="distinctions.ts" />
var Firefly;
(function (Firefly) {
    var skillList = [
        "Craft",
        "Drive",
        "Fight",
        "Fix",
        "Fly",
        "Focus",
        "Influence",
        "Know",
        "Labor",
        "Move",
        "Notice",
        "Operate",
        "Perform",
        "Shoot",
        "Sneak",
        "Survive",
        "Throw",
        "Treat",
        "Trick",
    ];
    var DieCode = (function () {
        function DieCode(sides) {
            this.additionalStepUps = 0;
            this.sides = sides;
        }
        DieCode.prototype.stepUp = function () {
            var result = _.find(DieCode.references, { sides: this.sides + 2 });
            if (!result) {
                result = new DieCode(this.sides);
                result.additionalStepUps = this.additionalStepUps + 1;
            }
            return result;
        };
        DieCode.prototype.stepBack = function () {
            var result;
            if (this.additionalStepUps > 0) {
                result = new DieCode(this.sides);
                result.additionalStepUps = this.additionalStepUps - 1;
            }
            else {
                var result = _.find(DieCode.references, { sides: this.sides - 2 });
            }
            return result;
        };
        DieCode.prototype.display = function () {
            return 'd' + this.sides;
        };
        DieCode.prototype.sideCount = function () {
            return this.sides;
        };
        DieCode.prototype.getAdditionalSteps = function () {
            return this.additionalStepUps;
        };
        DieCode.availableDieCodes = function () {
            return _.clone(DieCode.references, false);
        };
        DieCode.references = [
            new DieCode(4),
            new DieCode(6),
            new DieCode(8),
            new DieCode(10),
            new DieCode(12),
        ];
        DieCode.d4 = _.find(DieCode.references, { sides: 4 });
        DieCode.d6 = _.find(DieCode.references, { sides: 6 });
        DieCode.d8 = _.find(DieCode.references, { sides: 8 });
        DieCode.d10 = _.find(DieCode.references, { sides: 10 });
        DieCode.d12 = _.find(DieCode.references, { sides: 12 });
        return DieCode;
    })();
    var Attributes = (function () {
        function Attributes() {
            this.physical = undefined;
            this.mental = undefined;
            this.social = undefined;
        }
        return Attributes;
    })();
    var Skill = (function () {
        function Skill(name) {
            this.rating = DieCode.d4;
            if (!_.contains(skillList, name)) {
                throw new Error('Invalid skill name: ' + name);
            }
            this.name = name;
        }
        Skill.prototype.allowSpeciality = function () {
            return this.rating.sideCount() >= 6;
        };
        return Skill;
    })();
    var SignatureAsset = (function () {
        function SignatureAsset() {
            this.rating = DieCode.d6;
            this.triggers = [];
        }
        return SignatureAsset;
    })();
    var Character = (function () {
        function Character() {
            this.bio = new Firefly.names.Bio();
            this.attributes = new Attributes();
            this.distinctions = [];
            this.selectedTriggers = [];
            this.skills = [];
            this.signatureAssets = [];
        }
        Character.prototype.highlightedSkills = function () {
            return _(this.distinctions).map(function (d) { return d.highlightedSkills; }).flatten().unique().value();
        };
        Character.prototype.addDistinction = function (distinction) {
            if (this.distinctions.length < 3) {
                this.distinctions.push(distinction);
                for (var index in distinction.highlightedSkills) {
                    var highlightedSkill = this.addSkill(distinction.highlightedSkills[index]);
                    highlightedSkill.rating = highlightedSkill.rating.stepUp();
                }
                this.selectedTriggers.push(_.map(distinction.triggers, function (trigger) { return false; }));
                return true;
            }
            return false;
        };
        Character.prototype.addSkill = function (skillName) {
            var result = _.find(this.skills, { name: skillName });
            if (result)
                return result;
            var result = new Skill(skillName);
            this.skills.push(result);
            this.skills = _.sortBy(this.skills, 'name');
            return result;
        };
        Character.prototype.addSignatureAsset = function () {
            var result = new SignatureAsset();
            this.signatureAssets.push(result);
            return result;
        };
        return Character;
    })();
    var CharacterCreationController = (function () {
        function CharacterCreationController($scope, distinctions, skillList, bioGenerator) {
            this.dieCodes = DieCode.availableDieCodes();
            this.character = new Character();
            this.steppedUpSkills = [];
            this.specialityCount = 0;
            this.showNeeds = false;
            this.needsAssetsOrSpecialities = this.canBuySpeciality;
            this.needsDistinctionTriggers = this.allowAddTrigger;
            this.needsDistinction = this.allowAddDistinction;
            this.$scope = $scope;
            this.distinctions = distinctions;
            this.skillList = skillList;
            this.bioGenerator = bioGenerator;
        }
        CharacterCreationController.prototype.generateName = function () {
            this.character.bio = this.bioGenerator('');
        };
        CharacterCreationController.prototype.generateAttributes = function () {
            var dieCodes = _([DieCode.d6, DieCode.d8, DieCode.d10]);
            for (var attribute in this.character.attributes) {
                if (!this.character.attributes[attribute]) {
                    var options = dieCodes.filter(this.attributesOptions(attribute)).value();
                    var index = _.random(options.length - 1);
                    this.character.attributes[attribute] = options[index];
                }
            }
        };
        CharacterCreationController.prototype.generateDistinctions = function () {
            while (this.allowAddDistinction()) {
                var categories = _(this.character.distinctions).pluck('category').unique().value();
                var availableDistinctions = _.filter(this.distinctions.all(), function (d) { return !_.contains(categories, d.category); });
                this.character.addDistinction(availableDistinctions[_.random(availableDistinctions.length - 1)]);
            }
            while (this.needsDistinctionTriggers()) {
                var distinctionIndex = _.random(this.character.selectedTriggers.length - 1);
                var triggerIndex = _.random(this.character.selectedTriggers[distinctionIndex].length - 1);
                this.character.selectedTriggers[distinctionIndex][triggerIndex] = true;
            }
        };
        CharacterCreationController.prototype.generateSkills = function () {
            var _this = this;
            while (this.needsSkills()) {
                var existingSkills = _(this.character.skills).pluck('name').filter(function (skillName) { return _this.canStepUp(skillName); }).value();
                var availableSkills = _.filter(skillList, function (skillName) { return _this.canStepUp(skillName); }).concat(existingSkills).concat(existingSkills).concat(existingSkills).concat(existingSkills);
                var index = _.random(availableSkills.length - 1);
                console.log(availableSkills, index);
                var skillName = availableSkills[index];
                console.log(skillName);
                this.stepUpSkill(this.character.addSkill(skillName));
            }
        };
        CharacterCreationController.prototype.generateAssets = function () {
            while (this.needsAssetsOrSpecialities()) {
                switch (_.random(3)) {
                    case 0:
                        var existingSkills = _(this.character.skills).filter(function (skill) { return !skill.boughtSpeciality && skill.allowSpeciality(); }).value();
                        this.buySpeciality(existingSkills[_.random(existingSkills.length - 1)]);
                        break;
                    case 1:
                    case 2:
                        var existingAssets = _.filter(this.character.signatureAssets, function (asset) { return asset.rating.sideCount() < 8; });
                        if (existingAssets.length > 0) {
                            this.stepUpAsset(existingAssets[_.random(existingAssets.length - 1)]);
                            break;
                        }
                    case 3:
                        this.addSignatureAsset();
                        break;
                }
            }
        };
        CharacterCreationController.prototype.genderText = function (gender) {
            return Firefly.names.Gender[gender];
        };
        CharacterCreationController.prototype.allowAddDistinction = function () {
            return this.character.distinctions.length < 3;
        };
        CharacterCreationController.prototype.allowAddTrigger = function () {
            return _(this.character.selectedTriggers).flatten().filter(function (t) { return t; }).value().length < 2;
        };
        CharacterCreationController.prototype.attributesOptions = function (attribute) {
            var currentCode;
            currentCode = this.character.attributes[attribute];
            var temp = _.clone(this.character.attributes);
            delete temp[attribute];
            var remaining = 24 - _(_.values(temp)).pluck('sides').filter(function (a) { return a; }).reduce(function (inValue, accum) { return inValue + accum; }, 0);
            return function (input) {
                if (input == currentCode)
                    return true;
                var sides = input.sideCount();
                if (sides < 6 || sides > 10) {
                    return false;
                }
                if (remaining == 24)
                    return true;
                var thisRemaining = remaining - sides;
                if (thisRemaining != 0 && (thisRemaining < 6 || thisRemaining > 10))
                    return false;
                return true;
            };
        };
        CharacterCreationController.prototype.skills = function () {
            var _this = this;
            return _(skillList).filter(function (skillName) { return !_.contains(_.pluck(_this.character.skills, 'name'), skillName); }).value();
        };
        CharacterCreationController.prototype.addSkill = function (skillName) {
            this.character.addSkill(skillName);
        };
        CharacterCreationController.prototype.skillPointCost = function (skillName) {
            return _.contains(this.character.highlightedSkills(), skillName) ? 1 : 2;
        };
        CharacterCreationController.prototype.skillPointsUsed = function () {
            var _this = this;
            return _(this.steppedUpSkills).reduce(function (result, skillName) { return result + _this.skillPointCost(skillName); }, 0);
        };
        CharacterCreationController.prototype.stepUpSkill = function (skill) {
            if (this.canStepUp(skill.name)) {
                skill.rating = skill.rating.stepUp();
                this.steppedUpSkills.push(skill.name);
                return true;
            }
            return false;
        };
        CharacterCreationController.prototype.canStepUp = function (skillName) {
            var skill = _.find(this.character.skills, { name: skillName });
            return (!skill || skill.rating.sideCount() < 12) && this.skillPointsUsed() + this.skillPointCost(skillName) <= 9 && this.character.distinctions.length >= 3;
        };
        CharacterCreationController.prototype.canStepBack = function (skillName) {
            return _.contains(this.steppedUpSkills, skillName);
        };
        CharacterCreationController.prototype.stepBackSkill = function (skill) {
            if (this.canStepBack(skill.name)) {
                var idx = _.indexOf(this.steppedUpSkills, skill.name);
                skill.rating = skill.rating.stepBack();
                this.steppedUpSkills.splice(idx, 1);
            }
            return false;
        };
        CharacterCreationController.prototype.canBuySpeciality = function () {
            return this.specialityCount < 5;
        };
        CharacterCreationController.prototype.buySpeciality = function (skill) {
            if (this.canBuySpeciality() && !skill.boughtSpeciality && skill.allowSpeciality()) {
                skill.boughtSpeciality = true;
                this.specialityCount++;
                return true;
            }
            return false;
        };
        CharacterCreationController.prototype.addSignatureAsset = function () {
            if (this.canBuySpeciality()) {
                this.specialityCount++;
                this.character.addSignatureAsset();
            }
        };
        CharacterCreationController.prototype.canStepUpAsset = function (asset) {
            return asset.rating.sideCount() < 8 && this.canBuySpeciality();
        };
        CharacterCreationController.prototype.stepUpAsset = function (asset) {
            if (this.canStepUpAsset(asset)) {
                this.specialityCount++;
                asset.rating = asset.rating.stepUp();
                return true;
            }
            return false;
        };
        CharacterCreationController.prototype.stepBackAsset = function (asset) {
            this.specialityCount--;
            if (asset.rating.sideCount() > 6) {
                asset.rating = asset.rating.stepBack();
            }
            else {
                this.character.signatureAssets.splice(_.indexOf(this.character.signatureAssets, asset), 1);
            }
            return true;
        };
        CharacterCreationController.prototype.needsAttribute = function () {
            return !(this.character.attributes.physical && this.character.attributes.mental && this.character.attributes.social && true);
        };
        CharacterCreationController.prototype.needsSkills = function () {
            return this.skillPointsUsed() < 9;
        };
        CharacterCreationController.prototype.isFinished = function () {
            return !this.needsAttribute() && !this.needsAssetsOrSpecialities() && !this.needsSkills() && !this.needsDistinctionTriggers() && !this.needsDistinction();
        };
        CharacterCreationController.$inject = ['$scope', 'distinctions', 'skillList', 'bioGenerator'];
        return CharacterCreationController;
    })();
    var fireflyModule = angular.module('firefly', ['fireflyDistinctions', 'fireflyNames']);
    fireflyModule.controller('fireflyCharacterCreationController', CharacterCreationController);
    fireflyModule.factory('skillList', function () { return skillList; });
})(Firefly || (Firefly = {}));
//# sourceMappingURL=core.js.map