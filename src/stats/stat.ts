export enum Stat {
	
	/**
	 * Increases the crit, critical effect and haste by 1.
	 */
	AGILITY = "AGILITY",

	/**
	 * Increases attackpower by 3.
	 */
	STRENGTH = "STRENGTH",

	/**
	 * Increases spellpower, hit and crit by 1.
	 */
	INTELLECT = "INTELLECT",

	/**
	 * Increases the resistance to all spell schools by 1 and increases health by 10.
	 */
	STAMINA = "STAMINA",

	/**
	 * Increases the total health.
	 */
	HEALTH = "HEALTH",

	/**
	 * Reduces the effect of abilities on the unit.
	 */
	ARMOR = "ARMOR",
	FIRE_RESISTANCE = "FIRE_RESISTANCE",
	FROST_RESISTANCE = "FROST_RESISTANCE",
	WIND_RESISTANCE = "WIND_RESISTANCE",
	EARTH_RESISTANCE = "EARTH_RESISTANCE",
	LIGHT_RESISTANCE = "LIGHT_RESISTANCE",
	SHADOW_RESISTANCE = "SHADOW_RESISTANCE",
	NATURE_RESISTANCE = "NATURE_RESISTANCE",
	WATER_RESISTANCE = "WATER_RESISTANCE",
	THUNDER_RESISTANCE = "THUNDER_RESISTANCE",
	GRAVITY_RESISTANCE = "GRAVITY_RESISTANCE",

	/**
	 * Increases the chance to dodge an ability. Some abilities can not be dodged tho.
	 */
	DODGE = "DODGE",

	/**
	 * Increases the chance to parry an attack (physical). If an attack has been parried, a counter attack is executed.
	 */
	PARRY = "PARRY",

	/**
	 * Increases the chance for an attack missing on you.
	 */
	MISS = "MISS",

	/**
	 * Increases the chance to not miss with abilities.
	 */
	HIT = "HIT",

	/**
	 * Reduces the chance for abilities to crit on you and increases your dodge and parry.
	 */
	DEFENSE = "DEFENSE",

	/**
	 * Increases effect of physical abilities.
	 */
	ATTACK_POWER = "ATTACK_POWER",

	/**
	 * Increases the effect of all non physical abilities.
	 */
	SPELL_POWER = "SPELL_POWER",
	FIRE_SPELL_POWER = "FIRE_SPELL_POWER",
	FROST_SPELL_POWER = "FROST_SPELL_POWER",
	WIND_SPELL_POWER = "WIND_SPELL_POWER",
	EARTH_SPELL_POWER = "EARTH_SPELL_POWER",
	LIGHT_SPELL_POWER = "LIGHT_SPELL_POWER",
	SHADOW_SPELL_POWER = "SHADOW_SPELL_POWER",
	NATURE_SPELL_POWER = "NATURE_SPELL_POWER",
	WATER_SPELL_POWER = "WATER_SPELL_POWER",
	THUNDER_SPELL_POWER = "THUNDER_SPELL_POWER",
	GRAVITY_SPELL_POWER = "GRAVITY_SPELL_POWER",

	/**
	 * Increaes the chance for abilities to criticaly strike.
	 */
	CRIT = "CRIT",

	/**
	 * Effects different abilities and resources.
	 */
	HASTE = "HASTE",

	/**
	 * Enhances the effet of the mastery crystal.
	 */
	MASTERY = "MASTERY",

	/**
	 * Increases the effect of critical strikes.
	 */
	CRITICAL_EFFECT = "CRITICAL_EFFECT",
}