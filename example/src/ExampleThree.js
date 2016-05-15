import React, { Component } from 'react';
import Matrix from '../../dist/react-matrix-viz.js';

function setData(data, col, row) {
	return {
		val: data.val,
		col,
		row
	}
}

export default class ExampleOne extends Component {
	constructor(props) {
		super(props);
		this.state = {row: null, col: null}
	}

	setStyle(data) {
		var { row, col } = this.state;
		return {
			border: data.row === row || data.col === col ? '1px solid #666' : 'none'
		}
	}

	onMouseOver(data) {
		this.setState({row: data.row, col: data.col})
	}

	onMouseOut(data) {
		this.setState({row: null, col: null})
	}

	render() {
		return (
			<div className="example example-one">
				<Matrix 
					random={[10, 10]}
					setData={setData}
					onMouseOver={this.onMouseOver.bind(this)}
					onMouseOut={this.onMouseOut.bind(this)}
					setStyle={this.setStyle.bind(this)} />
			</div>
		);
	}
}
