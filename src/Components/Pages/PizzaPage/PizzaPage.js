import React, { Component } from 'react';
import { connect } from 'react-redux';
class PizzaPage extends Component {
	state = {
		order: [],
		currentPizza: {
			toppings: '',
			size: ''
		}
	}
	selectToppings = (toppings) => (event) => {
		this.setState({
			currentPizza: {
				...this.state.currentPizza,
				toppings,
			},
		})
	};


	selectSize = (size) => (event) => {
		this.setState({
			currentPizza: {
				...this.state.currentPizza,
				size,
			}
		});
	};

	addPizzaToOrder = (event) => {
		this.setState({
			order: [...this.state.order, this.state.currentPizza]
		},
			() => {
				this.clearCurrentPizza();
			});
	};

	clearCurrentPizza() {
		this.setState({
			currentPizza: {
				toppings: '',
				size: ''
			}
		});
	};

	clickNext = (event) => {
		this.props.dispatch({ type: 'SET_PIZZA', payload: this.state.order });
		this.props.history.push('/summary');
	};

	render() {
		const pizzaArray = this.state.order.map((item, index) => {
			return (
				<li key={index}>
					{item.size} - {item.toppings}
				</li>
			);
		});
		return (
			<div>
				<h1> Pizza Page </h1>
				<div>
					<button onClick={this.selectToppings("cheese")}>Cheese</button>
					<button onClick={this.selectToppings("sausage")}>Sausage</button>
					<button onClick={this.selectToppings("pepperoni")}>Pepperoni</button>
				</div>
				<div>
					<button onClick={this.selectSize("small")}>Small</button>
					<button onClick={this.selectSize("medium")}>Medium</button>
					<button onClick={this.selectSize("large")}>Large</button>
					<button onClick={this.selectSize("extraLarge")}>Extra Large</button>
				</div>
				<div>
					<button onClick={this.addPizzaToOrder}>Add to order</button>
				</div>
				<ul>{pizzaArray}</ul>
				<div>
					<button onClick={this.clickNext}>Next</button>
				</div>
			</div>
		);
	}
}

export default connect()(PizzaPage);
