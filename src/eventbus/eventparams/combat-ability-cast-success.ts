import { Unit } from "../../units/unit";
import { Ability } from "../../abilities/ability";

export interface CombatAbilityCastSuccess {
	source: Unit;
	target: Unit;
	ability: Ability;
	amount: number;
	critical: boolean;
	reflected: boolean;
	blocked: boolean;
	blockedAmount: boolean;
	resisted: number;
}