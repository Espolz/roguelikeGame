import { randomRange, clamp } from "./utils";
import weaponsDmg from "../constants/weaponsDmg";


export function generateMap(width, height, state) {
	let map = [];

	const controllerDirType = ['up', 'right', 'down', 'left'];
	const cOdds = 1; // controller change direction luck
	const eOdds = 50; // enemy spawn luck
	const hpOdds = 80; // health spawn luck
	const bossLvl = 4; // the level where the boss appear

	let wpIsSpawned = false;
	let exitIsSpawned = false;
	


	//fill the map with the void
	for (let i = 0; i < height; i++) {
		map.push([]);
		for (let j = 0; j < width; j++) {
			map[i].push({ 
				tile: 'void' 
			});
		}
	}

	//create the controller in the center of the map
	let cx = Math.floor(width/2);
	let cy = Math.floor(height/2);

	//give the controller a random direction
	let cdir = controllerDirType[randomRange(0, 3)];

	//create the level using 1000 steps
	for (let i = 0; i < 1000; i++) {

		//place a floor at the controller position 
		map[cy][cx] = {
			tile: 'floor'
		};

		//randomize the direction of the controller
		if (randomRange(0, cOdds) === cOdds) {
			cdir = controllerDirType[randomRange(0, 3)];
		}

		//move the controller
		switch(cdir) {
			case 'up':
				cy--;
				break;
			case 'down':
				cy++;
				break;
			case 'left':
				cx--;
				break;
			case 'right':
				cx++;
				break;
		}

		//make sure we don't move outside the map
		cx = clamp(cx, 1, width-2);
		cy = clamp(cy, 1, height-2);

	}

	// add the player at the center 
	map[Math.floor(height/2)][Math.floor(width/2)] = {
		tile: 'player',
		...state.player

	};

	//add the walls
	for (let yy = 1; yy < height-1; yy++) {
		for (let xx = 1; xx < width-1; xx++) {
			if (map[yy][xx].tile === 'floor') {
				if (map[yy][xx+1].tile !== 'floor' && map[yy][xx+1].tile !== 'player') map[yy][xx+1] = {tile: 'wall'};
				if (map[yy][xx-1].tile !== 'floor' && map[yy][xx-1].tile !== 'player') map[yy][xx-1] = {tile: 'wall'};
				if (map[yy+1][xx].tile !== 'floor' && map[yy+1][xx].tile !== 'player') map[yy+1][xx] = {tile: 'wall'};
				if (map[yy-1][xx].tile !== 'floor' && map[yy-1][xx].tile !== 'player') map[yy-1][xx] = {tile: 'wall'};
			}
		}
	}


	//add some enemies, health and weapons
	for (let yy = 1; yy < height-1; yy++) {
		for (let xx = 1; xx < width-1; xx++) {
			if (map[yy][xx].tile === 'floor') {
				if (randomRange(0, eOdds) === eOdds && 
					map[yy-1][xx].tile !== 'player' &&
					map[yy+1][xx].tile !== 'player' &&
					map[yy][xx-1].tile !== 'player' &&
					map[yy][xx+1].tile !== 'player') {
						map[yy][xx] = {
							tile: 'enemy',
							...state.enemy
						};
				} else if (randomRange(0, hpOdds) === hpOdds) {
					map[yy][xx] = {
						tile: 'health',
						hp: 20
					};
				} else if (!wpIsSpawned) {

					do {
						var rx = randomRange(1, width-2);
						var ry = randomRange(1, height-2); 
					} while(map[ry][rx].tile !== 'floor');

					map[ry][rx] = {
						tile: 'weapon',
						weapon: Object.keys(weaponsDmg)[state.dungeon]
					};

					wpIsSpawned = true;
				} else if (!exitIsSpawned) {
					do {
						var rx = randomRange(1, width-2);
						var ry = randomRange(1, height-2); 
					} while(map[ry][rx].tile !== 'floor');

					if (state.dungeon < bossLvl) {
						map[ry][rx] = {
							tile: 'exit'
						};
					} else {
						map[ry][rx] = {
							tile: 'boss',
							...state.boss
						};
					}

					exitIsSpawned = true;
				}
			}
			
		}
	}



	return map;
}