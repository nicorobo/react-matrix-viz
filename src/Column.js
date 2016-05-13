import React, { Component, PropTypes } from 'react';
import { columnStyle } from './Styles.js';

export default class Column extends Component {
	render() {
		return (
			<div className="column" style={columnStyle}>
				{this.props.cells}
			</div>
		);
	}
}

Column.propTypes = {
	cells: PropTypes.array, // An array of Cell components, representing a column
};

