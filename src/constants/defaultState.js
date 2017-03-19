export const defaultGameState = {
	map: [],
	dungeon: 0,
	game_status: 'starting',
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