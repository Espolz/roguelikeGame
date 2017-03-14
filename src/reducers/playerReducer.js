import * as actionType from "../constants/playerActionType"; 
import weaponsDmg from "../constants/weaponsDmg";


const defaultPlayerState = {
	hp: 100,
	weapon: "sword",
	dmg: 14,
	xp: 0,
	lvl: 0
};

const playerReducer = (state = defaultPlayerState, action) => {
	switch(action.type) {
		case actionType.ADD_HP: {
			return {
				...state,
				hp: state.hp + action.hp
			};
		}
		case actionType.ADD_XP: {
			return {
				...state,
				xp: state.xp + action.xp
			};
		}
		case actionType.SWITCH_WEAPON: {
			return {
				...state,
				weapon: action.weapon,
				dmg: state.dmg - weaponsDmg[state.weapon] + weaponsDmg[action.weapon]
			};
		}
		default: 
			return state;
	} 
}

export default playerReducer;