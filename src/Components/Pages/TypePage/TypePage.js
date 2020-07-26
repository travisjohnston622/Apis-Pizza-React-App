import React, { Component } from 'react';
import { connect } from 'react-redux';

class TypePage extends Component {
	render() {
		return (
			<div>
				<h1> Type Page </h1>
			</div>
		);
	}
}
export default connect()(TypePage);
