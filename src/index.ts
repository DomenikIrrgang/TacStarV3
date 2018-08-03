import { StatSet } from "./stats/statset";
import { Stat } from "./stats/stat";
import { Unit } from "./units/unit";

let statset = new StatSet({
	"STAMINA": 3,
	"INTELLECT": 200,
});

let unit = new Unit(20);

for (let stat of Object.keys(Stat)) {
	console.log(stat, unit.getBaseStats().getStat(<Stat> stat));
}