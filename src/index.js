import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';

store.subscribe(() => {
	console.log("store updated", store.getState());
	// const map = store.getState().game.map;
	// for (let i = 0; i < 25; i++) {
	// 	let row = '';
	// 	for (let j = 0; j < 25; j++) {
	// 		row += map[i][j] + ' ';
	// 	}
	// 	console.log(row);
	// }
});

// store.dispatch({
// 	type: 'ADD_XP',
// 	xp: 10
// });

// store.dispatch({
// 	type: 'SWITCH_WEAPON',
// 	weapon: 'gun'
// });

// store.dispatch({
// 	type: 'GENERATE',
// 	width: 50,
// 	height: 50
// });




