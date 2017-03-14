import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';
import playerReducer from './reducers/playerReducer';

export default createStore(combineReducers({
	game: gameReducer,
	player: playerReducer
}));