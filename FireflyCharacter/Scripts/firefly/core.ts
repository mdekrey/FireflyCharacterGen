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
		physical: DieCode;
		mental: DieCode;
		social: DieCode;
	}

	class Skill {
		name: string;
		rating: DieCode = DieCode.d4;
		boughtSpeciality: boolean;
		speciality: string;

		constructor(name: string) {
			if (!_.contains(skillList, name)) {
				throw new Error('Invalid skill name');
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

		addSkill(skillName: string): Skill {
			var result = _.find(this.skills, { name: skillName });
			if (result)
				return result;
			var result = new Skill(skillName);
			this.skills.push(result);
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
		skillList: string[];
		steppedUpSkills: string[] = [];
		specialityCount: number = 0;
		showNeeds: boolean = false;
		bioGenerator: (system: string) => names.Bio;

		static $inject = ['$scope', 'distinctions', 'skillList', 'bioGenerator'];

		constructor($scope: ng.IScope, distinctions: distinctions.DistinctionSet, skillList: string[], bioGenerator: (system: string) => names.Bio) {
			this.$scope = $scope;
			this.distinctions = distinctions;
			this.skillList = skillList;
			this.bioGenerator = bioGenerator;
		}

		generateName(): void {
			this.character.bio = this.bioGenerator('');
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

		stepUpSkill(skill: Skill): boolean {
			if (this.canStepUp(skill)) {
				skill.rating = skill.rating.stepUp();
				this.steppedUpSkills.push(skill.name);
				return true;
			}
			return false;
		}

		canStepUp(skill: Skill): boolean {
			return skill.rating.sideCount() < 12 && this.steppedUpSkills.length < 9 && this.character.distinctions.length >= 3;
		}

		canStepBack(skill: Skill): boolean {
			return _.contains(this.steppedUpSkills, skill.name);
		}

		stepBackSkill(skill: Skill): boolean {
			if (this.canStepBack(skill)) {
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
			return this.steppedUpSkills.length < 9;
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
	}
	

	var fireflyModule = angular.module('firefly', ['fireflyDistinctions', 'fireflyNames']);
	fireflyModule.controller('fireflyCharacterCreationController', CharacterCreationController);
	fireflyModule.factory('skillList',() => skillList);

}