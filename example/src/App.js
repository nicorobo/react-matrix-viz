import React, { Component } from 'react';
import { render } from 'react-dom';
import Matrix from '../../dist/react-matrix-viz.js';
import data from './RandomData.js'; // Returns a 2d array of object literals, with property val (random int between 0-9 inclusive)

function getStyle(data) {
	return {
		backgroundColor: 'rgba(200, 150, 200, '+data.val/10+')',
		border: data.val > 0 ? 'none' : '1px solid #ddd',
	}
}

export default class App extends Component {
	render() {
		return (
			<Matrix data={data} setStyle={getStyle}/>
		);
	}
}

render(<App />, document.getElementById('app'));