import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

import "../App.scss";

class Login extends Component {

  constructor(props) {
   super(props);
   this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      isLoggedIn: false,
      showForm: true,
    }
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

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const showForm = this.state.showForm;
    let button;
    let form;

    if(showForm) {
      form = <Form />
    } else {
      form = <div>
        You Are Logged In,
        <Link to="/jobs">View Jobs Now</Link>
        <button className="ui button" onClick={this.handleLogoutClick}>Log Out</button>
      </div>
    }
    console.log(this.state)


    return(
    <div className="login-form">
      { form }
      <button className="ui button" onClick={ this.fakeLogin }>Fake Login</button>
    </div>
    )
  }
}

export default Login;