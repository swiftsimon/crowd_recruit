import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Jobs from './components/Jobs/Jobs';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
        <div className="button-container">
          <Jobs />
          <Post />
        </div>
        <Login />
        </header>
      </div>
    );
  }
}

export default App;
