import React, { Component } from 'react';
import './App.css';
import HomeButtons from './components/HomeButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="button-container">
            <HomeButtons />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
