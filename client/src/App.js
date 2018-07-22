import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import ReduxCounterContainer from './ReduxCounterContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Counter</h1>
        </header>
        <Counter />
        <hr />
        <ReduxCounterContainer />
      </div>
    );
  }
}

export default App;
