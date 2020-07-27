import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//string
const typeReducer = (state = 'delivery', action) => {
	if (action.type === 'SET_ORDER_TYPE') {
		return action.payload;
	} else if (action.type === 'CLEAR_ORDER_TYPE') {
		return '';
	}
	return state;
};
//object
/*
{
  firstname: STRING,
  lastname: STRING,
  address: STRING
}
*/
const customerReducer = (state = {}, action) => {
	if (action.type === 'SET_CUSTOMER_INFO') {
		return action.payload;
	} else if (action.type === 'CLEAR_CUSTOMER_INFO') {
		return {};
	}
	return state;
};
//array
const pizzaReducer = (state = [], action) => {
	if (action.type === 'SET_PIZZA') {
		return action.payload;
	} else if (action.type === 'CLEAR_PIZZA_ORDER') {
		return [];
	}
	return state;
};

const storeInstance = createStore(
	combineReducers({
		typeReducer,
		customerReducer,
		pizzaReducer,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
