import React, { Component } from 'react';
import { render } from 'react-dom';
import ExampleOne from './ExampleOne.js';
import ExampleTwo from './ExampleTwo.js';

export default class App extends Component {
	render() {
		return (
			<div className="examples">
				<ExampleOne />
				<ExampleTwo />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));