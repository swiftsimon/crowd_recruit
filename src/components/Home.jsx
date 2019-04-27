import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class Home extends Component {

  constructor (props){
    super(props);
        
    this.state = {
      check: true,
      words: "testing"
    }
  }

  render() {
    return (
      <div className="grid">
        <div style={ {display: "flex"} } className="ui buttons">
          <Link 
            to="/login" 
            className="ui button"
            style={ {textDecoration:"none"} }>
            Login
          </Link>
          <Link 
            to="/jobs"
            className="ui button"
            style={ {textDecoration:"none"} }>
            Jobs
          </Link>
        </div>
      </div>
    );
  } 
}

export default Home;
