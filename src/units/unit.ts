import { StatSet } from "../stats/statset";
import { StatusEffect } from "../statuseffects/status-effect";
import { Combat } from "../combat/combat";

export class Unit {
	private level: number;
	private baseStats: StatSet;
	private statusEffectStats: StatSet;
	private gearStats: StatSet;
	private statusEffects: StatusEffect[] = [];
	private currentCombat: Combat;

	constructor(level?: number, baseStats?: StatSet) {
		this.level = level || 1;
		this.baseStats = baseStats || StatSet.forLevel(this.level);
		this.statusEffectStats = new StatSet();
		this.gearStats = new StatSet();
	}

	public getBaseStats(): StatSet {
		return this.baseStats;
	}

	public getStatusEffectStats(): StatSet {
		return this.statusEffectStats;
	}

	public getGearStats(): StatSet {
		return this.gearStats;
	}

	public getStats(): StatSet {
		return this.baseStats.addStatSet(this.statusEffectStats).addStatSet(this.gearStats);
	}

	public getLevel(): number {
		return this.level;
	}

	public combatStart(combat: Combat): void {
		this.currentCombat = combat;
	}

	public combatEnd(): void {
		this.currentCombat = null;
	}

	public applyStatusEffect(statusEffect: StatusEffect, source: Unit): void {
		this.statusEffects.push(statusEffect);
		statusEffect.onApply(this.currentCombat, source, this);
	}

	public removeStatusEffect(statusEffect: StatusEffect): void {
		this.statusEffects.find((element, index) => {
			if (statusEffect.getId() === element.getId()) {
				this.statusEffects.splice(index, 1);
				element.onRemove();
				return true;
			}
			return false;
		});
	}

	public dispellStatusEffects(dispeller: Unit): void {
		for (let i = 0; i < this.statusEffects.length; i++) {
			const statusEffect = this.statusEffects[i];
			if (statusEffect.isDispellable()) {
				this.statusEffects.splice(i, 1);
				statusEffect.onDispell(dispeller);
			} else {
				i++;
			}
		}
	}

}