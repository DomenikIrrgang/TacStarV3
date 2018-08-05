import { CombatRules } from "./combat-rules";
import { Eventbus } from "../eventbus/eventbus";

export class Combat {
	private rules: CombatRules;
	private eventbus: Eventbus;

	public getCombatRules(): CombatRules {
		return this.rules;
	}

	public getEventbus(): Eventbus {
		return this.eventbus;
	}
}