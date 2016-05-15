import React, { Component } from 'react';
import Matrix from '../../dist/react-matrix-viz.js';

function getStyle(data) {
	return {
		backgroundColor: 'rgba(200, 150, 200, '+data.val/100+')',
		border: data.val > 10 ? 'none' : '1px solid #ddd'
	}
}

export default class ExampleOne extends Component {
	render() {
		return (
			<div className="example example-one">
				<Matrix random={[10, 10]} setStyle={getStyle} />
			</div>
		);
	}
}
