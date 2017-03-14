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
	return state;
}

export default gameReducer;