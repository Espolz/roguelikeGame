import * as actionType from "../constants/gameActionType"; 
import { generateMap } from "../utils/mapGeneration";
import { movePlayer } from "../utils/playerMovements";
import weaponsDmg from "../constants/weaponsDmg";
import { defaultGameState } from "../constants/defaultState";


const gameReducer = (state = defaultGameState, action) => {
	switch(action.type) {
		case actionType.GENERATE: {
			return {
				...state,
				game_status: 'playing',
				map: generateMap(action.width, action.height, state)
			};
		}

		case actionType.MOVE_PLAYER: {
			return movePlayer(action.direction, state);
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
			return {
				...state,
				player: {
					...state.player,
					xp: newXp,
					lvl: Math.floor(newXp/10),
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