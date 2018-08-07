import { StatCalculator } from "./statcalculator";
import { Unit } from "../units/unit";
import { SpellSchool } from "../abilities/spellschool";

export class StatCalculatorDecorator implements StatCalculator {

	private decorated: StatCalculator;

	constructor(statCalculator: StatCalculator) {
		this.decorated = statCalculator;
	}

	public getTotalHealth(unit: Unit): number {
		return this.decorated.getTotalHealth(unit);
	}

	public getTotalDodge(unit: Unit): number {
		return this.decorated.getTotalDodge(unit);
	}

	public getTotalParry(unit: Unit): number {
		return this.decorated.getTotalParry(unit);
	}

	public getTotalMiss(unit: Unit): number {
		return this.decorated.getTotalMiss(unit);
	}

	public getTotalHit(unit: Unit): number {
		return this.decorated.getTotalHit(unit);
	}

	public getTotalHaste(unit: Unit): number {
		return this.decorated.getTotalHaste(unit);
	}

	public getTotalCrit(unit: Unit): number {
		return this.decorated.getTotalCrit(unit);
	}

	public getTotalCriticalEffect(unit: Unit): number {
		return this.decorated.getTotalCriticalEffect(unit);
	}

	public getTotalSpellPower(spellSchool: SpellSchool, unit: Unit): number {
		return this.decorated.getTotalSpellPower(spellSchool, unit);
	}

	public getTotalResistance(spellSchool: SpellSchool, unit: Unit): number {
		return this.decorated.getTotalResistance(spellSchool, unit);
	}
}