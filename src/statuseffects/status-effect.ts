import { Unit } from "../units/unit";
import { Combat } from "../combat/combat";

export abstract class StatusEffect {

	protected dispellable: boolean;
	protected maximumDuration: number;
	protected remainingDuration: number;
	protected name: string;
	protected description: string;
	protected source: Unit;
    protected combat: Combat;

	/**
	 * Is invoked if the StatusEffect is applied to a Unit.
	 * 
	 * @param combat Combat the StatusEffect has been applied in.
	 * @param source Unit that applied the StatusEffect.
	 * @param target Unit the StatusEffect has been applied on.
	 */
	abstract onApply(combat: Combat, source: Unit, target: Unit): void;
	
	/**
	 * Is invoked if the StatusEffect regularly faded.
	 * 
	 * @param target The Unit the StatusEffect faded on.
	 */
	abstract onExpire(target: Unit): void;
	
	/**
	 * Is invoked if the StatusEffect is removed before it expires.
	 * 
	 * @param target The Unit the StatusEffect was removed from.
	 */
	abstract onRemove(target: Unit): void;
	
	/**
	 * Is invoked if the StatusEffect is dispelled.
	 * 
	 * @param source The Unit that dispelled the StatusEffect.
	 * @param target The Unit the StatusEffect was dispelled on.
	 */
	abstract onDispell(source: Unit, target: Unit): void;
	
	/**
	 * Is invoked if the StatusEffect lasted on turn.
	 * 
	 * @param target The Unit the StatusEffect lasted on.
	 */
	abstract onTurnOver(target: Unit): void;
	
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
}