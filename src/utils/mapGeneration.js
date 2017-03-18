import { randomRange, clamp } from "./utils";

export function generateMap(width, height) {
	let map = [];
	const controllerDirType = ['up', 'right', 'down', 'left'];
	const odds = 1;

	//fill the map with the void
	for (let i = 0; i < height; i++) {
		map.push([]);
		for (let j = 0; j < width; j++) {
			map[i].push('void');
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
		map[cy][cx] = 'floor';

		//randomize the direction of the controller
		if (randomRange(0, odds) === odds) {
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
	map[Math.floor(height/2)][Math.floor(width/2)] = 'player';

	//add the walls
	for (let yy = 1; yy < height-1; yy++) {
		for (let xx = 1; xx < width-1; xx++) {
			if (map[yy][xx] === 'floor') {
				if (map[yy][xx+1] !== 'floor' && map[yy][xx+1] !== 'player') map[yy][xx+1] = 'wall';
				if (map[yy][xx-1] !== 'floor' && map[yy][xx-1] !== 'player') map[yy][xx-1] = 'wall';
				if (map[yy+1][xx] !== 'floor' && map[yy+1][xx] !== 'player') map[yy+1][xx] = 'wall';
				if (map[yy-1][xx] !== 'floor' && map[yy-1][xx] !== 'player') map[yy-1][xx] = 'wall';
			}
		}
	}


	return map;
}