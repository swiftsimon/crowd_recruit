import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ui, uiConfig } from '../../services/authConfig';
import * as firebaseui from 'firebaseui';
import firebase from "firebase";

import Form from '../Form';

import "../../App.scss";

class Login extends Component {

  constructor(props) {
   super(props);
   this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      isLoggedIn: false,
      showForm: true,
    }
    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  }

  fakeLogin = () => {
    this.setState({
      isLoggedIn: true,
      showForm: false
    })
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
      showForm: true
    });
  }

  authenticate() {
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const showForm = this.state.showForm;
 
    console.log(this.state)

    return(
    <div className="login_container ui center aligned container">
      <div id="firebaseui-auth-container"></div>
      <button className="button-main" onClick={this.authenticate}>Log In</button>
    </div>
    )
  }
}

export default Login;