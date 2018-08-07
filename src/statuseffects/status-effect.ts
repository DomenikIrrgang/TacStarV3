import { Unit } from "../units/unit";
import { Combat } from "../combat/combat";
import { Eventbus } from "../eventbus/eventbus";
import { Event } from "../eventbus/event";
import { StatusEffectType } from "./status-effect-type";

/**
 * A status effect can only be applied to a unit. A status effect has full access to all functionalties of 
 * the combat and its units. It gets notified when it is applied, removed, dispelled, expired or a turn ended.
 * To take actions on this events simply override the appropiate method.
 */
export abstract class StatusEffect {

	protected dispellable: boolean;
	protected maximumDuration: number;
	protected remainingDuration: number;
	protected name: string;
	protected description: string;
	protected source: Unit;
	protected target: Unit;
	protected combat: Combat;
	protected visible: boolean;
	protected type: StatusEffectType;
	private static counter = 1;
	private id: number;
	
	/**
	 * Initilizes a new status effect.
	 * 
	 * @param name Name of the status effect.
	 * @param description Description of the status effect.
	 * @param maximumDuration Maximum duration of the status effect.
	 * @param dispellable If true, status effect can be removed by abilities.
	 * @param visible If true, will be shown to the user in the user interface.
	 */
	constructor(name: string, description: string, statusEffectType: StatusEffectType, maximumDuration: number, dispellable: boolean, visible: boolean) {
		this.name = name;
		this.description = description;
		this.maximumDuration = maximumDuration;
		this.remainingDuration = this.maximumDuration;
		this.dispellable = dispellable;
		this.visible = visible;
		this.type = statusEffectType;
		this.id = StatusEffect.counter++;
	}

	/**
	 * Is invoked if the StatusEffect is applied to a Unit.
	 * 
	 * @param combat Combat the StatusEffect has been applied in.
	 * @param source Unit that applied the StatusEffect.
	 * @param target Unit the StatusEffect has been applied on.
	 */
	public onApply(combat: Combat, source: Unit, target: Unit): void {
		this.source = source;
		this.target = target;
		this.combat = combat;
		Eventbus.getInstance().dispatchEvent(Event.STATUS_EFFECT_APPLIED, this);
	}
	
	/**
	 * Is invoked if the StatusEffect regularly faded.
	 * 
	 */
	public onExpire(): void {
		Eventbus.getInstance().dispatchEvent(Event.STATUS_EFFECT_EXPIRED, this);
	}
	
	/**
	 * Is invoked if the StatusEffect is removed before it expires.
	 * 
	 */
	public onRemove(): void {
		Eventbus.getInstance().dispatchEvent(Event.STATUS_EFFECT_REMOVED, this)
	}
	
	/**
	 * Is invoked if the StatusEffect is dispelled.
	 * 
	 * @param dispeller The Unit that dispelled the StatusEffect.
	 */
	public onDispell(dispeller: Unit): void {
		Eventbus.getInstance().dispatchEvent(Event.STATUS_EFFECT_DISPELLED, this, dispeller);
	}
	
	/**
	 * Is invoked if the StatusEffect lasted on turn.
	 * 
	 */
	public onTurnOver(): void {
		this.remainingDuration -= this.combat.getCombatRules().getTurnSpeed();
	}
	
	/**
	 * Returns TRUE if StatusEffect is dispellable.
	 * 
	 * @return True if dispellable.
	 */
	public isDispellable(): boolean {
		return this.dispellable;
	}
	
	/**
	 * Returns the remaining duration of the StatusEffect.
	 * 
	 * @return Current Duration of StatusEffect.
	 */
	public getRemainingDuration(): number {
		return this.remainingDuration;
	}

	/**
	 * Changes the remaining duration of a status effect. If the new duration exeeds the maximum
	 * duration, the remaining duration is set to the maximum.
	 * 
	 * @param newDuration New remaining duration of the status effect.
	 */
	public setRemainingDuration(newDuration: number): void {
		if (newDuration > this.maximumDuration) {
			newDuration = this.maximumDuration;
		}
		this.remainingDuration = newDuration;
	}
	
	/**
	 * Return the full duration of the StatusEffect.
	 * 
	 * @return Full Duration of StatusEffect.
	 */
	public getMaximumDuration(): number {
		return this.maximumDuration;
	}
	
	/**
	 * Returns the name of the StatusEffect.
	 * 
	 * @return Name of the StatusEffect.
	 */
	public getName(): string {
		return this.name;
	}
	
	/**
	 * Return the Description of the StatusEffect.
	 * 
	 * @return Description of the StatusEffect.
	 */
	public getDescription(): string {
		return this.description;
	}

	/**
	 * Returns true if status effect should be visible to the user.
	 * 
	 * @return True if status effect should be visible to the user.
	 */
	public isVisible(): boolean {
		return this.visible;
	}

	/**
	 * The id uniquely identifies a status effect.
	 * 
	 * @return Id of the StatusEffect.
	 */
	public getId(): number {
		return this.id;
	}
}