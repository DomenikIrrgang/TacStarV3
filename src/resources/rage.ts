import { Resource } from "./resource";
import { ResourceType } from "./resource-type";
import { Stat } from "../stats/stat";
import { CombatAbilityCastSuccess } from "../eventbus/eventparams/combat-ability-cast-success";
import { Eventbus } from "../eventbus/eventbus";
import { Event } from "../eventbus/event";
import { Unit } from "../units/unit";

export class Rage extends Resource {

	constructor(unit: Unit) {
		super(unit, 100, 100);
		Eventbus.getInstance().addEventCallback(Event.COMBAT_ABILITY_CAST_SUCCESS, this.onAbilityCastSuccess.bind(this));
	}

	private onAbilityCastSuccess(event: CombatAbilityCastSuccess) {
		if (event.target === this.unit) {
			let newRage = 5;
			if (event.critical === true) {
				newRage *= 2;
			}
			this.increaseCurrentValue(newRage);
		}

		if (event.source === this.unit) {
			let newRage = 3;
			if (event.critical === true) {
				newRage *= 2;
			}
			this.increaseCurrentValue(newRage);
		}
	}

	public getAddedMaximumValue(): number {
		return this.unit.getStats().getStat(Stat.RAGE);
	}
	public getType(): ResourceType {
		return ResourceType.RAGE;
	}
}