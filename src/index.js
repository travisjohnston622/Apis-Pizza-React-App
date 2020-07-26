import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { provider } from 'react-redux';
import logger from 'redux-logger';
//string
const typeReducer = (state = 'delivery', action) => {
	if (action.type === 'SET_ORDER_TYPE') {
		return action.payload;
	}
	return state;
};
//object
const customerReducer = (store) => { };
//array
const pizzaReducer = (store) => { };

const storeInstance = createStore(
	combineReducers({
		typeReducer,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<provider store={storeInstance}>
		<App />
	</provider>,
	document.getElementById('root'),
);
