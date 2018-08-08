import { Ability } from "../ability";
import { SpellSchool } from "../spellschool";
import { ResourceType } from "../../resources/resource-type";
import { AbilityTarget } from "../ability-target";
import { AbilityType } from "../ability-type";
import { Unit } from "../../units/unit";
import { Combat } from "../../combat/combat";

export class Fireball extends Ability {

	constructor() {
		super(0);
	}

	public getAbilityValue(source: Unit): number {
		return source.getStatCalculator().getTotalSpellPower(this.getAbilityDamage(), source) * 1.4;
	}

	public execute(combat: Combat, source: Unit, target: Unit): void {
		
	}

	public getAbilityDamage(): SpellSchool {
		return SpellSchool.FIRE;
	}
	
	public getResourceType(): ResourceType {
		return ResourceType.MANA;
	}

	public getAbilityTarget(): AbilityTarget {
		return AbilityTarget.SINGLE;
	}

	public getAbilityDamageType(): AbilityType {
		return AbilityType.DAMAGE;
	}

	public getResourceCost(): number {
		return 5;
	}

	public canCrit(): boolean {
		return true;
	}

	public canMiss(): boolean {
		return true;
	}

	public getCritChance(): number {
		return 0;
	}

	public getMissChance(): number {
		return 0;
	}

	public getCritModifier(): number {
		return 1;
	}

	public isDodgeable(): boolean {
		return true;
	}

	public isResistable(): boolean {
		return true;
	}

	public isBlockable(): boolean {
		return false;
	}

	public isReflectable(): boolean {
		return true;
	}

	public getName(): string {
		return "Fireball";
	}
	public getIcon(): string {
		return "fireball_icon.png";
	}
}