import React, { Component } from 'react';

// extends = inheritance
// JSXIntro is now a component, but we replace the render() function in it.
// There are actually a ton more things going on in the component object, but we don't see it.
class JSXIntro extends Component {
	// Anything inside the return of the render() method is what'll be displayed
	render() {
		return (
			<div>
				<h3>JSX</h3>
				<ul>
					<li>Stands for JavaScript Extensions.</li>
					<li>Looks a lot like HTML, but it is NOT HTML.</li>
					<li>Compiles down to pure JavaScript.</li>
					<li>Easier than writing pure JS.</li>
					<li>Makes code safe from injection attacks.</li>
				</ul>
				<hr />
			</div>
			);
	}
}

// Let the component be found by our main file and then loaded into the page:

export default JSXIntro;
