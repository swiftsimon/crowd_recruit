import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoggedIn: false
        }

        handleClick(e) {
            e.preventDefault();
            console.log("login clicked");
            this.setState({isLoggedIn: true})
        }
    }

    render() {
       
        return(
            <button onclick={handleClick}>
                Login
            </button>
        );
    }
}

export default Login;