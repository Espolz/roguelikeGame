import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Container from "./containers/App";
import store from './store';

import './index.css';


ReactDOM.render(
	<Provider store={store}>
		<Container />
	</Provider>, 
	document.getElementById('app')
);






// store.subscribe(() => {
// 	console.log("store updated", store.getState());
// 	const map = store.getState().map;
// 	for (let i = 0; i < map.length; i++) {
// 		let row = '';
// 		for (let j = 0; j < map[i].length; j++) {
// 			row += map[i][j].tile + ' ';
// 		}
// 		console.log(row);
// 	}
// });
 


// store.dispatch({
// 	type: 'GENERATE',
// 	width: 5,
// 	height: 5
// });


// store.dispatch({
// 	type: 'MOVE_PLAYER',
// 	direction: 'right'
// });



// // store.dispatch({
// // 	type: 'ADD_HP',
// // 	hp: 10
// // });


// // store.dispatch({
// // 	type: 'SWITCH_WEAPON',
// // 	weapon: 'gun'
// // });

// // store.dispatch({
// // 	type: 'ADD_XP',
// // 	xp: 10
// // });




