import * as actionType from "../constants/gameActionType"; 
import { generateMap } from "../utils/mapGeneration";

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
	}

};

const gameReducer = (state = defaultGameState, action) => {
	switch(action.type) {
		case actionType.GENERATE: {
			return {
				...state,
				map: generateMap(action.width, action.height)
			}
		}
		default:
			return state;
	}
}

export default gameReducer;