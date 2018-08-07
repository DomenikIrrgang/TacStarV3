import { CombatRules } from "./combat-rules";

export class Combat {
	private rules: CombatRules;

	public getCombatRules(): CombatRules {
		return this.rules;
	}
}