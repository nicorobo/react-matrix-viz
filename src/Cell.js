import React, { Component, PropTypes } from 'react';
import { cellStyle } from './Styles.js';
import { extend } from 'lodash';
import Radium from 'radium';

class Cell extends Component {
	render() {
		var {data, setStyle, setHoverStyle, onClick} = this.props;
		return (
			<div
				className="cell" 
				style={extend({}, cellStyle, setStyle(data), {':hover': setHoverStyle(data)})}
				onClick={() => onClick(data)}>
			</div>
		);
	}
}

Cell.propTypes = {
	data: PropTypes.object, // This cell's data
	setStyle: PropTypes.func, // This cell's style object
	setHoverStyle: PropTypes.func, // This cell's hover style object
	onClick: PropTypes.func, // This cell's click handler
};

export default Radium(Cell); // Wraps Cell in Radium, which extends React's inline CSS capabilities
