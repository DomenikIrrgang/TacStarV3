import { Eventbus } from "../eventbus/eventbus";
import { Event } from "../eventbus/event";
import { Combat } from "../combat/combat";
import { Unit } from "../units/unit";
import { SpellSchool } from "./spellschool";
import { ResourceType } from "../resources/resource-type";
import { AbilityTarget } from "./ability-target";
import { AbilityType } from "./ability-type";

export abstract class Ability {
	private remainingCooldown = 0;
	private maximumCooldown: number;

	constructor(maximumCooldown: number) {
		this.maximumCooldown = maximumCooldown;
		Eventbus.getInstance().addEventCallback(Event.COMBAT_TURN_OVER, this.onTurnOver.bind(this));
	}

	public onTurnOver(combat: Combat) {
		if (this.remainingCooldown > 0) {
			this.remainingCooldown = combat.getCombatRules().getTurnSpeed();
		}
	}

	public setRemainingCooldown(remainingCooldown: number): void {
		this.remainingCooldown = remainingCooldown;
	}

	public getRemainingCooldown(): number {
		return this.remainingCooldown;
	}

	public setMaximumCooldown(maximumCooldown: number): void {
		this.maximumCooldown = maximumCooldown;
	}

	public getMaximumCooldown(): number {
		return this.maximumCooldown;
	}

	/**
	 * Is invoked if Ability was successfully casted.
	 * 
	 * @param combat Combat in which the Ability was casted.
	 * @param source Unit that used this Ability.
	 * @param target Unit that will be the target of this Ability.
	 */
	public abstract execute(combat: Combat, source: Unit, target: Unit): void;

	/**
	 * Returns the damage of this Ability base on its source.
	 * 
	 * @param source Source of the Ability.
	 * @return Damage of this Ability.
	 */
	public abstract getAbilityDamage(): SpellSchool;


	/**
	 * Returns which Resource this Ability consumes.
	 * 
	 * @return The Resource that this Ability Consumes.
	 */
	public abstract getResourceType(): ResourceType;

	/**
	 * Returns which Units this Ability will target.
	 * 
	 * @return The Ability's targets.
	 */
	public abstract getAbilityTarget(): AbilityTarget;

	/**
	 * Returns the AbilityType.
	 * 
	 * @return The AbilityType.
	 */
	public abstract getAbilityDamageType(): AbilityType;

	/**
	 * Returns the costs of the Resource.
	 * 
	 * @return The Resource costs.
	 */
	public abstract getResourceCost(): number;

	/**
	 * Returns true if Ability is able to land a critical hit.
	 * 
	 * @return True if Ability can land a critical hit.
	 */
	public abstract canCrit(): boolean;

	public abstract canMiss(): boolean;

	/**
	 * Returns the extra CritChance of this Ability.
	 * 
	 * @return The extra CritChance.
	 */
	public abstract getCritChance(): number;

	/**
	 * Returns the extra MissChance of this Ability.
	 * 
	 * @return The extra MissChance.
	 */
	public abstract getMissChance(): number;

	public abstract getCritModifier(): number;

	public abstract isDodgeable(): boolean;

	public abstract isResistable(): boolean;

	public abstract isBlockable(): boolean;

	/**
	 * Returns true if ability can be reflected by the enemy.
	 * 
	 * @return True if ability can be reflected. 
	 */
	public abstract isReflectable(): boolean;

	/**
	 * Returns the value of this Ability based on its source.
	 * 
	 * @param source The source of this Ability.
	 * @return Damage value for unit before reduction.
	 */
	public abstract getAbilityValue(source: Unit): number;

	/**
	 * Returns the name of this Ability.
	 * 
	 * @return The name of this Ability.
	 */
	public abstract getName(): string;

	/**
	 * Returns the Icon of this Ability.
	 * 
	 * @return Icon of this Ability.
	 */
	public abstract getIcon(): string;
}