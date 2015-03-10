/// <reference path="distinctions.ts" />

module Firefly {	

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

	class DieCode {
		private static references: DieCode[] = [
			new DieCode(4),
			new DieCode(6),
			new DieCode(8),
			new DieCode(10),
			new DieCode(12),
		];
		static d4 = _.find(DieCode.references, { sides: 4 });
		static d6 = _.find(DieCode.references, { sides: 6 });
		static d8 = _.find(DieCode.references, { sides: 8 });
		static d10 = _.find(DieCode.references, { sides: 10 });
		static d12 = _.find(DieCode.references, { sides: 12 });
		private sides: number;
		private additionalStepUps: number = 0;

		constructor(sides: number) {
			this.sides = sides;
		}

		stepUp(): DieCode {
			var result = _.find(DieCode.references, { sides: this.sides + 2 });
			if (!result) {
				result = new DieCode(this.sides);
				result.additionalStepUps = this.additionalStepUps + 1;
			}
			return result;
		}

		stepBack(): DieCode {
			var result: DieCode;
			if (this.additionalStepUps > 0) {
				result = new DieCode(this.sides);
				result.additionalStepUps = this.additionalStepUps - 1;
			}
			else {
				var result = _.find(DieCode.references, { sides: this.sides - 2 });
			}
			return result;
		}

		display(): string {
			return 'd' + this.sides;
		}

		sideCount(): number {
			return this.sides;
		}

		getAdditionalSteps(): number {
			return this.additionalStepUps;
		}

		static availableDieCodes(): DieCode[] {
			return _.clone(DieCode.references, false);
		}
	}

	class Attributes {
		physical: DieCode = null;
		mental: DieCode = null;
		social: DieCode = null;
	}

	class Skill {
		name: string;
		rating: DieCode = DieCode.d4;
		boughtSpeciality: boolean;
		speciality: string;

		constructor(name: string) {
			if (!_.contains(skillList, name)) {
				throw new Error('Invalid skill name: ' + name);
			}
			this.name = name;
		}
		
		allowSpeciality(): boolean {
			return this.rating.sideCount() >= 6;
		}
	}

	class SignatureAsset {
		name: string;
		rating: DieCode = DieCode.d6;
		triggers: string[] = [];
	}

	class Character {
		bio: names.Bio = new names.Bio();
		attributes: Attributes = new Attributes();
		distinctions: distinctions.Distinction[] = [];
		selectedTriggers: boolean[][] = [];
		skills: Skill[] = [];
		signatureAssets: SignatureAsset[] = [];

		highlightedSkills(): string[]{
			return <string[]> _(this.distinctions).map(d => d.highlightedSkills).flatten().unique().value();
		}

		addDistinction(distinction: distinctions.Distinction): boolean {
			if (this.distinctions.length < 3) {
				this.distinctions.push(distinction);
				for (var index in distinction.highlightedSkills) {
					var highlightedSkill = this.addSkill(distinction.highlightedSkills[index]);
					highlightedSkill.rating = highlightedSkill.rating.stepUp();
				}
				this.selectedTriggers.push(_.map(distinction.triggers,(trigger) => false));
				return true;
			}
			return false;
		}

		removeDistinction(distinction: distinctions.Distinction): boolean {
			var idx = _.indexOf(this.distinctions, distinction);
			if (idx == -1)
				return false;
			this.distinctions.splice(idx, 1);
			this.selectedTriggers.splice(idx, 1);

			for (var index in distinction.highlightedSkills) {
				var highlightedSkill = this.addSkill(distinction.highlightedSkills[index]);
				highlightedSkill.rating = highlightedSkill.rating.stepBack();
			}

			this.skills = _.filter(this.skills,(skill: Skill) => skill.rating.sideCount() > 4);
		}

		addSkill(skillName: string): Skill {
			var result = _.find(this.skills, { name: skillName });
			if (result)
				return result;
			var result = new Skill(skillName);
			this.skills.push(result);
			this.skills = _.sortBy(this.skills, 'name');
			return result;
		}

		addSignatureAsset(): SignatureAsset {
			var result = new SignatureAsset();
			this.signatureAssets.push(result);
			return result;
		}
	}
	
	class CharacterCreationController {
		private $scope: ng.IScope;
		dieCodes: DieCode[] = DieCode.availableDieCodes();
		character: Character = new Character();
		distinctions: distinctions.DistinctionSet;
		distinctionPreview: distinctions.Distinction;
		private skillList: string[];
		private steppedUpSkills: string[] = [];
		private specialityCount: number = 0;
		showNeeds: boolean = false;
		private bioGenerator: (system: string) => names.Bio;
		private $http: ng.IHttpService;
		private attributePreGeneratedState : any;
		private attributePostGeneratedState: any;
		private distinctionsPreGeneratedState: any;
		private distinctionsPostGeneratedState: any;
		private skillsPreGeneratedState: string[];
		private skillsPostGeneratedState: string[];
		private assetsPreGeneratedState: any;
		private assetsPostGeneratedState: any;

		static $inject = ['$scope', 'distinctions', 'skillList', 'bioGenerator', '$http'];

		constructor($scope: ng.IScope, distinctions: distinctions.DistinctionSet, skillList: string[], bioGenerator: (system: string) => names.Bio, $http: ng.IHttpService) {
			this.$scope = $scope;
			this.distinctions = distinctions;
			this.skillList = skillList;
			this.bioGenerator = bioGenerator;
			this.$http = $http;
		}

		generateName(): void {
			this.character.bio = this.bioGenerator('');
		}
		
		generateAttributes(): void {
			var getState = () => ({
				physical: this.character.attributes.physical,
				mental: this.character.attributes.mental,
				social: this.character.attributes.social,
			});

			var state = getState();
			if (angular.toJson(state) == angular.toJson(this.attributePostGeneratedState)) {
				this.character.attributes.physical = this.attributePreGeneratedState.physical;
				this.character.attributes.mental = this.attributePreGeneratedState.mental;
				this.character.attributes.social = this.attributePreGeneratedState.social;
			} else {
				this.attributePreGeneratedState = state;
			}

			var dieCodes = _([DieCode.d6, DieCode.d8, DieCode.d10]);
			for (var attribute in this.character.attributes) {
				if (!this.character.attributes[attribute]) {
					var options = dieCodes.filter(this.attributesOptions(attribute)).value();
					var index = _.random(options.length - 1);
					this.character.attributes[attribute] = options[index];
				}
			}
			this.attributePostGeneratedState = getState();
		}

		generateDistinctions(): void {
			var getState = () => ({ distinctions: _.pluck(this.character.distinctions, 'name'), triggers: _.cloneDeep(this.character.selectedTriggers) });

			var state = getState();
			if (angular.toJson(state) == angular.toJson(this.distinctionsPostGeneratedState)) {
				var toRemove = _.filter(this.character.distinctions, distinction => !_.contains(this.distinctionsPreGeneratedState.distinctions, distinction.name));
				for (var i = 0; i < toRemove.length; i++) {
					this.character.removeDistinction(toRemove[i]);
				}

				this.character.selectedTriggers = <boolean[][]> _.cloneDeep(this.distinctionsPreGeneratedState.triggers);
			} else {
				this.distinctionsPreGeneratedState = state;
			}

			while (this.allowAddDistinction()) {
				var categories = _(this.character.distinctions).pluck('category').unique().value();
				var availableDistinctions = _.filter(this.distinctions.all(), d => !_.contains(categories, d.category));

				this.character.addDistinction(availableDistinctions[_.random(availableDistinctions.length - 1)]);
			}

			while (this.needsDistinctionTriggers()) {
				var distinctionIndex: number = _.random(this.character.selectedTriggers.length - 1);
				var triggerIndex: number = _.random(this.character.selectedTriggers[distinctionIndex].length - 1);
				this.character.selectedTriggers[distinctionIndex][triggerIndex] = true;
			}
			this.distinctionsPostGeneratedState = getState();
		}

		generateSkills(): void {
			var getState = () => _.clone(this.steppedUpSkills);

			var state = getState();
			if (angular.toJson(state) == angular.toJson(this.skillsPostGeneratedState)) {
				var toRemove = _.difference(this.steppedUpSkills, this.skillsPreGeneratedState);
				for (var i = 0; i < toRemove.length; i++) {
					this.stepBackSkill(_.find(this.character.skills, { name: toRemove[i] }));
				}

				this.character.skills = _.filter(this.character.skills,(skill: Skill) => skill.rating.sideCount() > 4);
			} else {
				this.skillsPreGeneratedState = state;
			}

			while (this.needsSkills()) {
				var existingSkills = <string[]> _(this.character.skills).pluck('name').filter((skillName:string) => this.canStepUp(skillName)).value();
				var availableSkills = _.filter(skillList, skillName => this.canStepUp(skillName))
					.concat(existingSkills).concat(existingSkills).concat(existingSkills).concat(existingSkills);

				var index = _.random(availableSkills.length - 1);
				var skillName = availableSkills[index];

				this.stepUpSkill(this.character.addSkill(skillName));
			}
			this.skillsPostGeneratedState = getState();
		}

		generateAssets(): void {
			var getState = () => ({ assets: _.clone(this.character.signatureAssets, true), specialities: _(this.character.skills).filter({ boughtSpeciality: true }).pluck('name').value(), specialityCount: this.specialityCount });

			var state = getState();
			if (angular.toJson(state) == angular.toJson(this.assetsPostGeneratedState)) {
				this.character.signatureAssets = _.filter(this.character.signatureAssets, asset => _.find(this.assetsPreGeneratedState.assets, asset));
				var newSpecialities = _.difference(state.specialities, this.assetsPreGeneratedState.specialities);

				for (var i = 0; i < newSpecialities.length; i++) {
					var skill = _.find(this.character.skills, { name: newSpecialities[i] });
					skill.boughtSpeciality = false;
					skill.speciality = null;
				}

				this.specialityCount = this.assetsPreGeneratedState.specialityCount;

			} else {
				this.assetsPreGeneratedState = state;
			}

			while (this.needsAssetsOrSpecialities()) {
				switch (_.random(3)) {
					case 0:
						var existingSkills = _(this.character.skills).filter((skill: Skill) => !skill.boughtSpeciality && skill.allowSpeciality()).value();
						this.buySpeciality(existingSkills[_.random(existingSkills.length - 1)]);
						break;
					case 1:
					case 2:
						var existingAssets = _.filter(this.character.signatureAssets, (asset: SignatureAsset) => asset.rating.sideCount() < 8);
						if (existingAssets.length > 0) {
							this.stepUpAsset(existingAssets[_.random(existingAssets.length - 1)]);
							break;
						}
					case 3:
						this.addSignatureAsset();
						break;
				}

			}
			this.assetsPostGeneratedState = getState();
		}

		genderText(gender: names.Gender): string {
			return names.Gender[gender];
		}

		allowAddDistinction(): boolean {
			return this.character.distinctions.length < 3;
		}

		allowAddTrigger(): boolean {
			return _(this.character.selectedTriggers).flatten().filter(t => t).value().length < 2;
		}

		attributesOptions(attribute: string) {
			var currentCode: DieCode;
			currentCode = this.character.attributes[attribute];
			var temp: Object = _.clone(this.character.attributes);
			delete temp[attribute];
			var remaining = 24 - _(_.values(temp)).pluck('sides').filter(a => a).reduce((inValue: number, accum: number) => inValue + accum, 0);

			return (input: DieCode) => {
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
		}

		skills(): string[]{
			return _(skillList).filter(skillName => !_.contains(_.pluck(this.character.skills, 'name'), skillName)).value();
		}

		addSkill(skillName: string): void {
			this.character.addSkill(skillName);
		}

		skillPointCost(skillName: string): number {
			return _.contains(this.character.highlightedSkills(), skillName) ? 1 : 2;
		}

		skillPointsUsed(): number {
			return _(this.steppedUpSkills).reduce((result: number, skillName: string) =>  result + this.skillPointCost(skillName), 0);
		}

		stepUpSkill(skill: Skill): boolean {
			if (this.canStepUp(skill.name)) {
				skill.rating = skill.rating.stepUp();
				this.steppedUpSkills.push(skill.name);
				return true;
			}
			return false;
		}

		canStepUp(skillName: string): boolean {
			var skill = _.find(this.character.skills, { name: skillName });
			return (!skill || skill.rating.sideCount() < 12) && this.skillPointsUsed() + this.skillPointCost(skillName) <= 9;
		}

		canStepBack(skillName: string): boolean {
			return _.contains(this.steppedUpSkills, skillName);
		}

		stepBackSkill(skill: Skill): boolean {
			if (this.canStepBack(skill.name)) {
				var idx = _.indexOf(this.steppedUpSkills, skill.name);
				skill.rating = skill.rating.stepBack();
				this.steppedUpSkills.splice(idx, 1);
			}
			return false;
		}

		canBuySpeciality(): boolean {
			return this.specialityCount < 5;
		}

		buySpeciality(skill: Skill): boolean {
			if (this.canBuySpeciality() && !skill.boughtSpeciality && skill.allowSpeciality()) {
				skill.boughtSpeciality = true;
				this.specialityCount++;
				return true;
			}
			return false;
		}

		addSignatureAsset() {
			if (this.canBuySpeciality()) {
				this.specialityCount++;
				this.character.addSignatureAsset();
			}
		}

		canStepUpAsset(asset: SignatureAsset) {
			return asset.rating.sideCount() < 8 && this.canBuySpeciality();
		}

		stepUpAsset(asset: SignatureAsset): boolean {
			if (this.canStepUpAsset(asset)) {
				this.specialityCount++;
				asset.rating = asset.rating.stepUp();
				return true;
			}
			return false;
		}
		
		stepBackAsset(asset: SignatureAsset): boolean {
			this.specialityCount--;
			if (asset.rating.sideCount() > 6) {
				asset.rating = asset.rating.stepBack();
			} else {
				this.character.signatureAssets.splice(_.indexOf(this.character.signatureAssets, asset), 1);
			}
			return true;
		}

		needsAttribute(): boolean {
			return !(this.character.attributes.physical && this.character.attributes.mental && this.character.attributes.social && true);
		}
		needsAssetsOrSpecialities: () => boolean = this.canBuySpeciality;
		needsSkills(): boolean {
			return this.skillPointsUsed() < 9;
		}
		needsDistinctionTriggers: () => boolean = this.allowAddTrigger;
		needsDistinction: () => boolean = this.allowAddDistinction;

		isFinished(): boolean {
			return !this.needsAttribute() &&
				!this.needsAssetsOrSpecialities() &&
				!this.needsSkills() &&
				!this.needsDistinctionTriggers() &&
				!this.needsDistinction();
		}

		create() {
			this.$http.post('/api/generation/character', this.character).success(function (data) {
				window.open('/api/generation/download/' + data);
			});
		}
	}
	

	var fireflyModule = angular.module('firefly', ['fireflyDistinctions', 'fireflyNames']);
	fireflyModule.controller('fireflyCharacterCreationController', CharacterCreationController);
	fireflyModule.factory('skillList',() => skillList);

}