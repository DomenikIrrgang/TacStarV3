import { StatusEffect } from "../status-effect";
import { StatusEffectType } from "../status-effect-type";
import { Combat } from "../../combat/combat";

export class FireballDoT extends StatusEffect {
	constructor() {
		super(
			"Fireball",
			"Deals damage each round.",
			StatusEffectType.DEBUFF,
			5,
			true,
			true
		);
	}

	public onTurnOver(combat: Combat): void {
		super.onTurnOver(combat);
	}
}