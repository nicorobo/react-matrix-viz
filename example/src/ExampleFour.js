import React, { Component } from 'react';
import { Matrix, Util } from '../../dist/react-matrix-viz.js';

function setData(data, col, row) {
	return {
		val: data.val,
		col,
		row
	}
}

function checkFrontier(col, row, center, steps) {
	var dColBack = center[0] - steps;
	var dColFor = center[0] + steps;
	var dRowBack = center[1] - steps;
	var dRowFor = center[1] + steps;
	if ((col === dColBack || col === dColFor) && (row <= dRowFor && row >= dRowBack)) return true;
	if ((row === dRowBack || row === dRowFor) && (col <= dColFor && col >= dColBack)) return true;
	return false
}

export default class ExampleOne extends Component {
	constructor(props) {
		super(props);
		this.state = {center: [], step: 1, interval: null }
	}

	setHoverStyle(data) {
		return {
			cursor: 'pointer'
		}
	}

	getConfig() {
		return {
			setData,
			random: [10, 10],
			onClick: this.onClick.bind(this),
			setHoverStyle: this.setHoverStyle.bind(this),
			setStyle: this.setStyle.bind(this),
		}
	}

	setStyle(data) {
		var {center, step} = this.state
		var inFrontier = checkFrontier(data.col, data.row, center, step)
		return {
			backgroundColor: inFrontier ? 'lightblue' : '#eee'
		}
	}
	
	onClick(data){
		var { step, interval } = this.state;
		if (interval) window.clearInterval(interval);
		this.setState({center: [data.col, data.row], step: 0})
		var interval = window.setInterval(()=>{
			this.setState({step: this.state.step + 1})
			if(this.state.step > 10) window.clearInterval(interval)
		}, 200)
		this.setState({ interval })
	}

	render() {

		var config = this.getConfig()
		return (
			<div className="example example-one">
				<Matrix {...config} />
			</div>
		);
	}
}
