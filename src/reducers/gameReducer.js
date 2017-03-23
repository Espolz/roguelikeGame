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

		default:
			return state;
	}
}

export default gameReducer;