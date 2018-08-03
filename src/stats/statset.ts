import { Stat } from "./stat";
import { SpellSchool } from "../spells/spellschool";


export class StatSet {
	private readonly set: { [key: string]: number; } = {};

	constructor(stats?: { [key: string]: number }) {
		for (const stat of Object.keys(Stat)) {
			if (stats && stats[stat]) {
				this.set[stat] = stats[stat];
			} else {
				this.set[stat] = 0;
			}
		}
	}

	public get stats(): { [key: string]: number; } {
		return this.set;
	}

	public setStat(stat: Stat, value: number) {
		this.set[stat] = value;
	}

	public getStat(stat: Stat): number {
		return this.set[stat];
	}

	public increaseStat(stat: Stat, value: number) {
		this.setStat(stat, this.getStat(stat) + value);
	}

	public reduceStat(stat: Stat, value: number) {
		this.setStat(stat, this.getStat(stat) - value);
	}

	public getSpellPower(spellSchool: SpellSchool): number {
		switch (spellSchool) {
			case SpellSchool.FIRE:
				return this.getStat(Stat.FIRE_SPELL_POWER);
			case SpellSchool.FROST:
				return this.getStat(Stat.FROST_SPELL_POWER);
			case SpellSchool.WIND:
				return this.getStat(Stat.WIND_SPELL_POWER);
			case SpellSchool.EARTH:
				return this.getStat(Stat.EARTH_SPELL_POWER);
			case SpellSchool.GRAVITY:
				return this.getStat(Stat.GRAVITY_SPELL_POWER);
			case SpellSchool.LIGHT:
				return this.getStat(Stat.LIGHT_SPELL_POWER);
			case SpellSchool.SHADOW:
				return this.getStat(Stat.SHADOW_SPELL_POWER);
			case SpellSchool.NATURE:
				return this.getStat(Stat.NATURE_SPELL_POWER);
			case SpellSchool.PHYSICAL:
				return this.getStat(Stat.ATTACK_POWER);
			case SpellSchool.THUNDER:
				return this.getStat(Stat.THUNDER_SPELL_POWER);
			case SpellSchool.WATER:
				return this.getStat(Stat.WATER_SPELL_POWER);
		}
		throw new Error("unknown spell school");
	}

	public getResistance(spellSchool: SpellSchool): number {
		switch (spellSchool) {
			case SpellSchool.FIRE:
				return this.getStat(Stat.FIRE_RESISTANCE);
			case SpellSchool.FROST:
				return this.getStat(Stat.FROST_RESISTANCE);
			case SpellSchool.WIND:
				return this.getStat(Stat.WIND_RESISTANCE);
			case SpellSchool.EARTH:
				return this.getStat(Stat.EARTH_RESISTANCE);
			case SpellSchool.GRAVITY:
				return this.getStat(Stat.GRAVITY_RESISTANCE);
			case SpellSchool.LIGHT:
				return this.getStat(Stat.LIGHT_RESISTANCE);
			case SpellSchool.SHADOW:
				return this.getStat(Stat.SHADOW_RESISTANCE);
			case SpellSchool.NATURE:
				return this.getStat(Stat.NATURE_RESISTANCE);
			case SpellSchool.PHYSICAL:
				return this.getStat(Stat.ARMOR);
			case SpellSchool.THUNDER:
				return this.getStat(Stat.THUNDER_RESISTANCE);
			case SpellSchool.WATER:
				return this.getStat(Stat.WATER_RESISTANCE);
		}
		throw new Error("unknown spell school");
	}

	public static forLevel(level: number): StatSet {
		const tmp = new StatSet();
		tmp.setStat(Stat.HEALTH, 20 * level);
		tmp.setStat(Stat.AGILITY, level);
		tmp.setStat(Stat.STRENGTH, level);
		tmp.setStat(Stat.INTELLECT, level);
		tmp.setStat(Stat.STAMINA, level);
		return tmp;
	}

}