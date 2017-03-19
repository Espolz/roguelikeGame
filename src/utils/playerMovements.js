import { clamp } from './utils';
import weaponsDmg from '../constants/weaponsDmg';


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
			if (map[i][j].tile === 'player') {
				return [j, i];
			}
		}
	}

	return [-1, -1];
}

export function movePlayer(direction, state) {
	let newState = { ...state };
	let map = newState.map.map(e => e.map(o => Object.assign({}, o)));
	const playerPosition = findPlayerPosition(map);

	if (playerPosition.every(x => x != -1)) {
		const newPosition = getNewPosition(map, playerPosition, direction);
		let oMeeting = placeMeeting(map, newPosition);
		
		if (oMeeting.tile === 'floor') {

			map[playerPosition[1]][playerPosition[0]] = {tile:'floor'};
			map[newPosition[1]][newPosition[0]] = {tile: 'player'};

		} else if (oMeeting.tile === 'enemy') {

			//fighting
			oMeeting.hp = oMeeting.hp - state.player.dmg;
			newState = {
				...newState,
				player: {
					...newState.player,
					hp: newState.player.hp - oMeeting.dmg 
				}
			}

			//check if enemy/boss is dying
			if (oMeeting.hp <= 0) {
				map[playerPosition[1]][playerPosition[0]] = {tile:'floor'};
				map[newPosition[1]][newPosition[0]] = {tile: 'player'};
			}

			// check if player is dying
			if (newState.player.hp <= 0) {
				map[playerPosition[1]][playerPosition[0]] = {tile:'floor'};

				//restart
				newState = {
					...newState,
					game_status: 'starting'
				}
			}
		} else if (oMeeting.tile === 'health') {

			map[playerPosition[1]][playerPosition[0]] = {tile:'floor'};
			map[newPosition[1]][newPosition[0]] = {tile: 'player'};

			newState = {
				...newState,
				player: {
					...newState.player,
					hp: newState.player.hp + oMeeting.hp
				}
			}
		} else if (oMeeting.tile === 'weapon') {

			map[playerPosition[1]][playerPosition[0]] = {tile:'floor'};
			map[newPosition[1]][newPosition[0]] = {tile: 'player'};

			newState = {
				...newState,
				player: {
					...newState.player,
					weapon: oMeeting.weapon,
					dmg: newState.player.dmg - weaponsDmg[newState.player.weapon] + weaponsDmg[oMeeting.weapon]
				}
			}
		}
	}

	return {
		...newState,
		map
	};
}