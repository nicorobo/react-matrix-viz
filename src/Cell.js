import React, { Component, PropTypes } from 'react';
import { cellStyle } from './Styles.js';
import { extend } from 'lodash';
import Radium from 'radium';

class Cell extends Component {

	getClickHandler(data) {
		var { onClick } = this.props;
		if (!onClick) return false;
		return () => onClick(data);
	}

	getMouseOverHandler(data) {
		var { onMouseOver } = this.props;
		if (!onMouseOver) return false;
		return () => onMouseOver(data);
	}

	getMouseOutHandler(data) {
		var { onMouseOut } = this.props;
		if (!onMouseOut) return false;
		return () => onMouseOut(data);
	}

	getStyle() {
		var { setStyle, setHoverStyle, data } = this.props;
		var style = extend({}, cellStyle);
		if(setStyle) style = extend(style, setStyle(data));
		if(setHoverStyle) style = extend(style, {':hover': setHoverStyle(data)});
		return style;
	}
	
	render() {
		var {data, className} = this.props;
		return (
			<div
				className={className}
				style={this.getStyle()}
				onClick={this.getClickHandler(data)}
				onMouseOver={this.getMouseOverHandler(data)}
				onMouseOut={this.getMouseOutHandler(data)}>
			</div>
		);
	}
}

Cell.propTypes = {
	data: PropTypes.object, // This cell's data
	setStyle: PropTypes.func, // This cell's style object
	setHoverStyle: PropTypes.func, // This cell's style object
	onClick: PropTypes.func, // This cell's click handler
	onMouseOver: PropTypes.func, // This cell's mouseover handler
	onMouseOut: PropTypes.func, // This cell's mouseout handler
	className: PropTypes.string, // Cell's class
};

export default Radium(Cell); // Wraps Cell in Radium, which extends React's inline CSS capabilities
