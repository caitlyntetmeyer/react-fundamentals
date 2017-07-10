import React, { Component } from 'react';

class ComponentsIntro extends Component {
	render() {
		return (
			<div>
				<h3>Components Intro</h3>
				<ul>
					<li>Components split the UI into independent, reusable pieces.</li>
					<li>Allow for the isolation of each piece.</li>
					<li>There is a component lifecycle - discussed later.</li>
					<li>All custom components (by convention, not by actual rule) should start with capital letters.</li>
				</ul>
				<hr />
			</div>
		);
	}
}

export default ComponentsIntro;
