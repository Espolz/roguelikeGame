import { clamp } from './utils';

function transformDirToVect(direction) {
	switch(direction) {
		case 'up': {
			return [0, -1];
		}
		case 'down': {
			return [0, 1];
		}
		case 'left': {
			return [-1, 0];
		}
		case 'right': {
			return [1, 0];
		}
		default:
			return [0, 0];
 	}
}

function getNewPosition(map, position, direction) {
	const dir = transformDirToVect(direction);
	const width = map[0].length;
	const height = map.length;

	const xx = clamp(position[0] + dir[0], 1, width-2);
	const yy = clamp(position[1] + dir[1], 1, height-2);

	return [xx, yy];
}


function placeMeeting(map, position) {
	return map[position[1]][position[0]];
}


function findPlayerPosition(map) {
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			if (map[i][j] === 'player') {
				return [j, i];
			}
		}
	}

	return [-1, -1];
}

export function movePlayer(map, direction) {
	const playerPosition = findPlayerPosition(map);

	if (playerPosition.every((tile) => tile != -1)) {
		const newPosition = getNewPosition(map, playerPosition, direction);
		const tileMeeting = placeMeeting(map, newPosition);
		
		if (tileMeeting === 'floor') {
			map[playerPosition[1]][playerPosition[0]] = 'floor';
			map[newPosition[1]][newPosition[0]] = 'player';
		}
	}

	return map;
}