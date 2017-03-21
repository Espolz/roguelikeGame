import * as actionType from "../constants/gameActionType";

export const generate = (width, height) => {
	return {
		type: actionType.GENERATE,
		width,
		height
	};
}

export const movePlayer = (direction) => {
	return {
		type: actionType.MOVE_PLAYER,
		direction
	};
}
