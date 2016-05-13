import React, { Component, PropTypes } from 'react';
import { matrixStyle } from './Styles.js';
import Column from './Column.js';
import Cell from './Cell.js';

// color('#F36B6B').mix(color('white'), data.val/10).hexString()
export default class Matrix extends Component {

	generateCells() {
		var { data, cellData, setStyle, setHoverStyle, onClick } = this.props;
		return data.map((col, i) => col.map((cell, j) => {
			return (<Cell 
				key={`col${i}row${j}`}
				data={cellData(cell, i, j)} // Using i and j to denote col and row respectively
				setStyle={setStyle}
				setHoverStyle={setHoverStyle}
				onClick={onClick} />);
		}));
	}

	render() {
		var cells = this.generateCells();
		return (
			<div className="matrix" style={matrixStyle}>
				{cells.map((col, i) => <Column key={`col${i}`} cells={col} />)}
			</div>
		);
	}
}

Matrix.propTypes = {
	data: PropTypes.array.isRequired, // A 2d array of values or objects
	cellData: PropTypes.func, // A function that determines what the cell's value will be
	setStyle: PropTypes.func, // A function that determines the cell's style
	setHoverStyle: PropTypes.func, // A function that determines the cell's style
	onClick: PropTypes.func, // An event handler, triggered when cell is clicked
};

Matrix.defaultProps = {
	cellData: (cell, col, row) => cell, // Returns the value at data[col][row]
	setStyle: (data) => ({}), // Return the default cell style
	setHoverStyle: (data) => ({}), // Return the default cell style
	onClick: (data) => true, // Log 'You clicked me!' on being clicked
};

