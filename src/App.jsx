import React, { Component } from 'react';
import firebase from 'firebase';
import './services/firebase';
import * as firebaseui from 'firebaseui';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import authTracker from './services/authTracker';
import './App.scss';
import Login from './components/Login/Login';
import ViewJobs from './components/ViewJobs/ViewJobs';
import PostJob from './components/PostJob/PostJob';

var uniqid = require('uniqid');

class App extends Component {

  constructor() {
    super();
    const tag = this;
    this.state = {
      user: {},
    }

    firebase.auth().onAuthStateChanged(function(user) {
      tag.setState({
        user
      });
    });
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

  logout = () => {
    firebase.auth().signOut().then(function() {
      // TODO refresh APP state once a user logs out 
      // Currently favourites still show after log out
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="app-title">
              Crowd Sourced Tech Recruiting
            </div>
            {/* Empty divs for auth hooks */}
            <div className="signin-status" id="sign-in-status"></div>
            <div className="signin-status" id="sign-in"></div>
            <pre id="account-details"></pre>
            { ( this.state.user !== null ) && <button className="button-main" onClick={this.logout}>Log Out</button> }
            { ( this.state.user == null ) && <Login /> }
          </header> 
          <div className="home-grid">
            <Link to="/">Home</Link>
            <Link to="/post-job">Post A Job</Link>
            <Link to="/view-jobs">View Jobs</Link>
            { ( this.state.user !== null ) && <Link to="/favourites">My Favourites</Link> }
          </div>
          <div className="login-form-container">
            <Route path="/login" component={ Login } />
            <Route path="/post-job" component={ PostJob } />
            <Route path="/view-jobs" component={ ViewJobs } />
            { ( this.state.user !== null ) && <Route path="/favourites" component={ ViewJobs } /> }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
