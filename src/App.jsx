import React, { Component } from 'react';
import Firebase from './services/firebase';


import './App.css';
// import faker from 'faker';
import HomeButtons from './components/HomeButtons';
import Login from './components/Login';
import JobTile from './components/JobTile';
import SearchBar from './components/SearchBar';
var uniqid = require('uniqid');


class App extends Component {

  onSearchSubmit = (term) => {
    console.log(term)
    Firebase.ref('JOBS/Toronto/Digital Ocean').set({
      100555: "web developer"
    });

  }

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
      <div className="App">
        <header className="App-header">
          Crowd Sourced Tech Recruiting
          <div className="grid">
            <SearchBar onTermSubmit={this.onSearchSubmit} />
            <HomeButtons />
            <Login />
            <JobTile />
          </div>
          <button className="ui primary button" onClick={this.retrieve}>RETRIEVE</button>          
        </header>
      </div>
    );
  }
}

export default App;
