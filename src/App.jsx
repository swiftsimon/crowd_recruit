import React, { Component } from 'react';
import './App.css';
// import faker from 'faker';
import HomeButtons from './components/HomeButtons';
import Login from './components/Login';
import JobTile from './components/JobTile'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="grid">
            <HomeButtons />
            <Login />
            <JobTile />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
