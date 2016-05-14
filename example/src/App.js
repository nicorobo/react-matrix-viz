import React, { Component } from 'react';
import { render } from 'react-dom';
import Matrix from '../../dist/react-matrix-viz.js';

function getStyle(data) {
	return {
		backgroundColor: 'rgba(200, 150, 200, '+data.val/100+')',
		border: data.val > 10 ? 'none' : '1px solid #ddd',
	}
}

export default class App extends Component {
	render() {
		return (
			<Matrix random={[10, 10]} setStyle={getStyle} />
		);
	}
}

render(<App />, document.getElementById('app'));