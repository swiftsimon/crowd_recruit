import React, { Component } from 'react';
import "../App.css"

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <label className="loginLabel" htmlFor="login"> Email</label>
                <input id="login" type="text" /> 
                <label className="loginLabel" htmlFor="login"> Password</label>
                <input id="login" type="text" /> 
                <button style={{ backgroundColor: 'red'}}>Submit</button>
            </div>
        )
    }
}