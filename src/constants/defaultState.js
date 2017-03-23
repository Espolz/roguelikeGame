export const defaultGameState = {
	map: [],
	dungeon: 1,
	game_status: 'starting',
	enemy: {
		hp: 30,
		dmg: 8,
	},
	boss: {
		hp: 600,
		dmg: 50
	},
	player: {
		hp: 100,
		weapon: "sword",
		dmg: 14,
		xp: 10,
		lvl: 1
	}
};