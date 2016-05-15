import React, { Component } from 'react';
import { render } from 'react-dom';
import ExampleOne from './ExampleOne.js';
import ExampleTwo from './ExampleTwo.js';
import ExampleThree from './ExampleThree.js';
import ExampleFour from './ExampleFour.js';

export default class App extends Component {
	render() {
		return (
			<div className="examples">
				<ExampleOne />
				<ExampleTwo />
				<ExampleThree />
				<ExampleFour />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));