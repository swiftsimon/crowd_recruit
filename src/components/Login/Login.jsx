import React, { Component } from 'react';
import './Login.css';
import '../../App.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
    }
  }

  loginClick = (e) => {
    e.preventDefault();
    console.log("Login Clicked");
    }

  render() {
       
    return(
      <button 
        onClick={this.loginClick}
        className ="button button-main">
          Login
      </button>
    );
  }
}

export default Login;