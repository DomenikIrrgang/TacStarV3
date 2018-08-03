import { Unit } from "../units/unit";
import { SpellSchool } from "../spells/spellschool";

export interface StatCalculator {
	getTotalHealth(unit: Unit): number;
	getTotalDodge(unit: Unit): number;
	getTotalParry(unit: Unit): number;
	getTotalMiss(unit: Unit): number;
	getTotalHit(unit: Unit): number;
	getTotalHaste(unit: Unit): number;
	getTotalCrit(unit: Unit): number;
	getTotalCriticalEffect(unit: Unit): number;

	getTotalSpellPower(spellschool: SpellSchool, unit: Unit): number;
	getTotalResistance(spellSchool: SpellSchool, unit: Unit): number;
}