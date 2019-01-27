import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Jobs from './components/Jobs/Jobs';
import Post from './components/Post/Post';
import Refer from './components/Refer/Refer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="button-container">
            <Jobs />
            <Post />
            <Refer />
          </div>
          <Login name="Simon"/>
        </header>
      </div>
    );
  }
}

export default App;
