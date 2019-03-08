import React, { Component } from 'react';
import "../App.css";
import Form from './Form';

class Login extends Component {

  constructor(props) {
   super(props);
   this.handleLoginClick = this.handleLoginClick.bind(this);
   this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      isLoggedIn: false,
      showForm: false,
    }
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      showForm: true,
    });
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const showForm = this.state.showForm;
    let button;
    let form;

    if (isLoggedIn) {
      button = ''
    } else {
      button = <button className="ui primary button" onClick={this.handleLoginClick}>Log In</button>
    }

    if(showForm) {
      form = <Form />
    }

    return(
    <div>
      { button }
      { form }
    </div>
    )
  }
}

export default Login;