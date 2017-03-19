import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';

store.subscribe(() => {
	console.log("store updated", store.getState());
	// const map = store.getState().map;
	// for (let i = 0; i < map.length; i++) {
	// 	let row = '';
	// 	for (let j = 0; j < map[i].length; j++) {
	// 		row += map[i][j] + ' ';
	// 	}
	// 	console.log(row);
	// }
});
 


store.dispatch({
	type: 'GENERATE',
	width: 30,
	height: 15
});


store.dispatch({
	type: 'MOVE_PLAYER',
	direction: 'right'
});


store.dispatch({
	type: 'ADD_HP',
	hp: 10
});


store.dispatch({
	type: 'SWITCH_WEAPON',
	weapon: 'gun'
});

store.dispatch({
	type: 'ADD_XP',
	xp: 10
});




