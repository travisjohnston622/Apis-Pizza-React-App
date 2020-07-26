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
	}
	return state;
};
//array
const pizzaReducer = (store) => { };

const storeInstance = createStore(
	combineReducers({
		typeReducer,
		customerReducer,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
