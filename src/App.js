import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
        <div className="button-container">
          <button className="button button-main">Apply</button>
          <button className="button button-main">Post</button>
          <button className="button button-main">Refer</button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
