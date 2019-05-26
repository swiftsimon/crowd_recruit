import React, { Component } from 'react';
import firebase from 'firebase';
import './services/firebase';
import * as firebaseui from 'firebaseui';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import authTracker from './services/authTracker';
import './App.scss';
// import faker from 'faker';
import Home from './components/Home';
import Login from './components/Login';
import ViewJobs from './components/ViewJobs/ViewJobs';
import PostJob from './components/PostJob/PostJob';
import Favourites from './components/Favourites/Favourites';

var uniqid = require('uniqid');

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    window.addEventListener('load', function() {
      authTracker()
    });
  }

  retrieve = () => {
    console.log(uniqid())
    var ref = firebase.database().ref("JOBS/Toronto");
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
            <Link className="home-button" to="/">HOME</Link>
            <div className="app-title">
              Crowd Sourced Tech Recruiting
            </div>

            <div id="sign-in-status"></div>
            <div id="sign-in"></div>
            <pre id="account-details"></pre>

          </header> 
          <div className="home-grid">
            <Link to="/login">Login</Link>
            <Link to="/post-job">Post A Job</Link>
            <Link to="/view-jobs">View Jobs</Link>
            <Link to="/favourites">My Favourites</Link>
          </div>
          <div className="login-form-container">
            <Route path="/login" component={ Login } />
            <Route path="/post-job" component={ PostJob } />
            <Route path="/view-jobs" component={ ViewJobs } />
            <Route path="/favourites" component={ ViewJobs } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
