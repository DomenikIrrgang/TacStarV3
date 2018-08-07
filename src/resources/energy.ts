import { Resource } from "./resource";
import { Unit } from "../units/unit";
import { Stat } from "../stats/stat";
import { ResourceType } from "./resource-type";
import { Eventbus } from "../eventbus/eventbus";
import { Event } from "../eventbus/event";

export class Energy extends Resource {

	constructor(unit: Unit) {
		super(unit, 100, 100);
		Eventbus.getInstance().addEventCallback(Event.COMBAT_TURN_OVER, this.onTurnOver);
	}

	private onTurnOver(): void {
		const baseEnergy = 5;
		const extraEnergy = this.unit.getStatCalculator().getTotalHaste(this.unit) / 100;
		this.increaseCurrentValue(baseEnergy + extraEnergy)
	}

	public getAddedMaximumValue(): number {
		return this.unit.getStats().getStat(Stat.ENERGY);
	}

	public getType(): ResourceType {
		return ResourceType.ENERGY;
	}
}