import { StatSet } from "../stats/statset";

export class Unit {
	private level: number;
	private baseStats: StatSet;

	constructor(level?: number, baseStats?: StatSet) {
		this.level = level || 1;
		this.baseStats = baseStats || StatSet.forLevel(this.level);
	}

	public getBaseStats(): StatSet {
		return this.baseStats;
	}

	public getStats(): StatSet {
		return this.baseStats;
	}

	public getLevel(): number {
		return this.level;
	}
}