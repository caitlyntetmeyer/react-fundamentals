import React, { Component } from 'react';
import JSXIntro from './JSXIntro';
import ComponentsIntro from './ComponentsIntro';
import PropsIntro from './PropsIntro';
import StateIntro from './StateIntro';
import ChildComponentsIntro from './ChildComponentsIntro';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container"> 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        <JSXIntro />
        <ComponentsIntro />
        <PropsIntro name="Michael Jackson" title="Smooth Criminal"/>
        <StateIntro />
        <ChildComponentsIntro />
      </div>
    </div>
    );
  }
}

export default App;
