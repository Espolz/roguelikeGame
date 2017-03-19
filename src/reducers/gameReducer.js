import * as actionType from "../constants/gameActionType"; 
import { generateMap } from "../utils/mapGeneration";
import { movePlayer } from "../utils/playerMovements";
import weaponsDmg from "../constants/weaponsDmg";

const defaultGameState = {
	map: [],
	dungeon: 0,
	enemy: {
		hp: 30,
		dmg: 8,
		lvl: 0
	},
	boss: {
		hp: 300,
		dmg: 50
	},
	player: {
		hp: 100,
		weapon: "sword",
		dmg: 14,
		xp: 0,
		lvl: 0
	}
};

const gameReducer = (state = defaultGameState, action) => {
	switch(action.type) {
		case actionType.GENERATE: {
			return {
				...state,
				map: generateMap(action.width, action.height)
			};
		}
		case actionType.MOVE_PLAYER: {
			let oldMap = [...state.map];
			let newMap = movePlayer(oldMap, action.direction);
			return {
				...state,
				map: newMap
			};
		}
		case actionType.ADD_HP: {
			return {
				...state,
				player: {
					...state.player,
					hp: state.player.hp + action.hp
				}
			};
		}
		case actionType.ADD_XP: {
			const newXp = state.player.xp + action.xp;
			console.log(newXp, Math.floor(newXp/10));
			return {
				...state,
				player: {
					...state.player,
					xp: newXp,
					lvl: Math.floor(newXp/10)
				}
			};
		}
		case actionType.SWITCH_WEAPON: {
			return {
				...state,
				player: {
					...state.player,
					weapon: action.weapon,
					dmg: state.player.dmg - weaponsDmg[state.player.weapon] + weaponsDmg[action.weapon]
				}
				
			};
		}
		default:
			return state;
	}
}

export default gameReducer;