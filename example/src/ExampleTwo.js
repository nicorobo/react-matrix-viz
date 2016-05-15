import React, { Component } from 'react';
import Matrix from '../../dist/react-matrix-viz.js';

function getHoverStyle(data) {
	return {
		backgroundColor: 'lightblue'
	}
}

export default class ExampleOne extends Component {
	render() {
		return (
			<div className="example example-one">
				<Matrix random={[10, 10]} setHoverStyle={getHoverStyle} />
			</div>
		);
	}
}
