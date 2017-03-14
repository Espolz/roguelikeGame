import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';


store.subscribe(() => {
	console.log("store updated", store.getState());
});

store.dispatch({
	type: 'ADD_XP',
	xp: 10
});

store.dispatch({
	type: 'SWITCH_WEAPON',
	weapon: 'gun'
});