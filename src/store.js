import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';

export default createStore(gameReducer);