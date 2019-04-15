import React, { Component } from 'react';
import Firebase from './services/firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
// import faker from 'faker';
import HomeButtons from './components/HomeButtons';
import Login from './components/Login';
import JobTile from './components/JobTile';
var uniqid = require('uniqid');


class App extends Component {

  retrieve = () => {
    console.log(uniqid())
    var ref = Firebase.ref("JOBS/Toronto");
    ref.once("value")
      .then(function (snapshot) {
        console.log(snapshot.val())
        // var key = snapshot.key; // "ada"
        // var childKey = snapshot.child("name/last").key; // "last"
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Crowd Sourced Tech Recruiting
            <div className="grid">
              <div style={ {display: "flex"} }>
                <Link to="/login">Login</Link>
                <Link to="/jobs">Jobs</Link>
              </div>
              <Route path="/" exact component={ HomeButtons } />
              <Route path="/login" component={ Login } />
              <Route path="/jobs" component={ JobTile } />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
