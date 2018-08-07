import { StatSet } from "./stats/statset";
import { Stat } from "./stats/stat";
import { Unit } from "./units/unit";
import { Combat } from "./combat/combat";

let statset = new StatSet({
	"STAMINA": 3,
	"INTELLECT": 200,
});

let unit = new Unit(20);
let combat = new Combat();
combat.startCombat();
combat.endCombat();