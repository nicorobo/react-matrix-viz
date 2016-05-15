import React, { Component } from 'react';
import { Matrix, Util } from '../../dist/react-matrix-viz.js';
var data = Util.randomData(10, 10);
var cells = null;

function setData(data, col, row) {
	return {
		val: data.val,
		col,
		row
	}
}

export default class ExampleThree extends Component {
	constructor(props) {
		super(props);
		this.state = {row: null, col: null}
	}

	setStyle(data) {
		console.log(data);
		var { row, col } = this.state;
		return {
			border: data.row === row || data.col === col ? '1px solid #ccc' : 'none',
			':hover': {}
		}
	}

	onMouseOver(data) {
		this.setState({row: data.row, col: data.col})
	}

	onMouseOut(data) {
		this.setState({row: null, col: null})
	}

	getConfig() {
		return {
			setData,
			onMouseOver: this.onMouseOver.bind(this),
			onMouseOut: this.onMouseOut.bind(this),
			setStyle: this.setStyle.bind(this),
		}
	}

	render() {
		var config = this.getConfig();
		if (!cells) cells = Util.generateCells(data, config);
		return (
			<div className="example example-one">
				<Matrix cells={cells} {...config} />
			</div>
		);
	}
}
