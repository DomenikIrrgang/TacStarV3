import { StatCalculator } from "./statcalculator";
import { Unit } from "src/units/unit";
import { Stat } from "./stat";
import { SpellSchool } from "../spells/spellschool";

export class DefaultStatCalculator implements StatCalculator {
	
	public getTotalHealth(unit: Unit): number {
		return unit.getStats().getStat(Stat.HEALTH) + unit.getStats().getStat(Stat.STAMINA) * 10;
	}

	public getTotalDodge(unit: Unit): number {
		return unit.getStats().getStat(Stat.DODGE) + unit.getStats().getStat(Stat.DEFENSE);
	}

	public getTotalParry(unit: Unit): number {
		return unit.getStats().getStat(Stat.PARRY) + unit.getStats().getStat(Stat.DEFENSE);
	}

	public getTotalMiss(unit: Unit): number {
		return unit.getStats().getStat(Stat.MISS);
	}

	public getTotalHit(unit: Unit): number {
		return unit.getStats().getStat(Stat.HIT) + unit.getStats().getStat(Stat.INTELLECT);
	}

	public getTotalHaste(unit: Unit): number {
		return unit.getStats().getStat(Stat.HASTE) + unit.getStats().getStat(Stat.AGILITY);
	}

	public getTotalCrit(unit: Unit): number {
		return unit.getStats().getStat(Stat.CRIT) + unit.getStats().getStat(Stat.AGILITY) + unit.getStats().getStat(Stat.INTELLECT);
	}

	public getTotalCriticalEffect(unit: Unit): number {
		return unit.getStats().getStat(Stat.CRITICAL_EFFECT) + unit.getStats().getStat(Stat.AGILITY);
	}

	public getTotalSpellPower(spellSchool: SpellSchool, unit: Unit): number {
		if (spellSchool === SpellSchool.PHYSICAL) {
			unit.getStats().getStat(Stat.ATTACK_POWER) + unit.getStats().getStat(Stat.STRENGTH) * 3;
		} else {
			return unit.getStats().getStat(Stat.SPELL_POWER) + unit.getStats().getStat(Stat.INTELLECT);
		}
	}

	public getTotalResistance(spellSchool: SpellSchool, unit: Unit): number {
		return unit.getStats().getResistance(spellSchool);
	}
}