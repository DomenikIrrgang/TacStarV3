import { CombatRules } from "./combat-rules";
import { Eventbus } from "../eventbus/eventbus";
import { Event } from "../eventbus/event";

export class Combat {
	private rules: CombatRules;

	public getCombatRules(): CombatRules {
		return this.rules;
	}

	public startCombat(): void {
		Eventbus.getInstance().dispatchEvent(Event.COMBAT_START, this);
	}

	public endCombat(): void {
		Eventbus.getInstance().dispatchEvent(Event.COMBAT_END, this);
	}
}