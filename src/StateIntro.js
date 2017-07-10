import React, { Component } from 'react';

class StateIntro extends Component {
	/* Runs when the component is created. We call "super()" to do all of the annoying React stuff. */
	constructor() {
		super();
/* this.state in the constructor will set our default state when the component is “constructed” by React: */
		this.state = {
			name: "Michael Bolton",
			otherName: "Kenny G"
		}
	}

/* These are methods (functions in objects) that the class can use: */
	changeNameOne(event) {
		/* updates the state object of the class */
		this.setState({name: event.target.value});
	}

	changeNameTwo(event) {
		this.setState({otherName: event.target.value});
	}

	render() {
		return (
			<div>
				<h3>State Intro</h3>
				<p>Use the input field to change the state of this component.</p>
				{/* "this" is referring to the onChange event. */}
				<input type="text" onChange={this.changeNameOne.bind(this)} />
				<input type="text" onChange={this.changeNameTwo.bind(this)} />
				<p>{this.state.name} and {this.state.otherName} are the greatest musicians ever.</p>
				<hr />
			</div>
		);
	}
}

export default StateIntro;
