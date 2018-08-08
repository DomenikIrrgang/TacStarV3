import { Unit } from "./unit";

export class UnitGroup {
	private units: Array<Unit> = [];

	constructor(units?: Array<Unit>) {
		if (units) {
			this.units = units;
		}
	}

	public addUnit(unit: Unit): void {
		this.units.push(unit);
	}

	public removeUnit(unit: Unit): void {
		for (let i = 0; i < this.units.length; i++) {
			if (unit.getId() === this.units[i].getId()) {
				this.units.splice(i, 1);
				break;
			}
		}
	}
}