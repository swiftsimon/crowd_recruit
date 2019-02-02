import React, { Component } from 'react';
import './App.css';
// import faker from 'faker';
import HomeButtons from './components/HomeButtons';
import Login from './components/Login';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="grid">
            <HomeButtons />
            <Login />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
