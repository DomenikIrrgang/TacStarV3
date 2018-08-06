import { Resource } from "./resource";
import { Unit } from "../units/unit";
import { ResourceType } from "./resource-type";

export class Health extends Resource {

	constructor(unit: Unit) {
		super(unit, 100, 100);
	}

	public turnOver() {}
	
	public getAddedMaximumValue(): number {
		return this.unit.getStatCalculator().getTotalHealth(this.unit);
	}

	public getType(): ResourceType {
		return ResourceType.HEALTH;
	}

}