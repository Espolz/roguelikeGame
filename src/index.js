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
