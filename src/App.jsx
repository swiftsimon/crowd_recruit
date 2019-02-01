import React, { Component } from 'react';
import './App.css';
import Jobs from './components/HomeButtons/HomeButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="button-container">
            <Jobs />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
