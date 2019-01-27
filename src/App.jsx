import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Apply from './components/Apply/Apply';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
        <div className="button-container">
          <Apply />
        </div>
        <Login />
        </header>
      </div>
    );
  }
}

export default App;
