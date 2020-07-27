import React, { Component } from 'react';
import { connect } from 'react-redux';
class SummaryPage extends Component {

	confirmOrder = (event) => {
		const dataForServer = {
			customer: this.props.store.customerReducer,
			order: this.props.store.pizzaReducer,
			type: this.props.store.typeReducer,
		};
		this.props.dispatch({ type: 'CLEAR_ORDER_TYPE' });
		this.props.dispatch({ type: 'CLEAR_CUSTOMER_INFO' });
		this.props.dispatch({ type: 'CLEAR_PIZZA_ORDER' });

		this.props.history.push('/');
	}
	render() {
		const pizzaArray = this.props.store.pizzaReducer.map((item, index) => {
			return (
				<li key={index}>
					{item.size} - {item.toppings}
				</li>
			);
		});
		return (
			<div>
				<h1> Summary Page </h1>
				<h5>{this.props.store.typeReducer}</h5>
				<p>{this.props.store.customerReducer.firstName}</p>
				<p>{this.props.store.customerReducer.lastName}</p>
				{this.props.store.customerReducer.address && (
					<p>{this.props.store.customerReducer.address}</p>
				)}
				<ul>{pizzaArray}</ul>
				<button onClick={this.confirmOrder}>Confirm</button>
			</div>
		);
	}
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SummaryPage);
