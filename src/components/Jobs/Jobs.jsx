import React, { Component } from 'react';
import './Jobs.css';
import '../../App.css'

class Jobs extends Component {

    constructor (props){
        super(props);
        this.jobsClick = this.jobsClick.bind(this);

        this.state = {

        }
    }

    jobsClick = () => {
        console.log('View Jobs Clicked')
    }

    render() {

        return (
            <button
            className="button button-main"
            onClick={this.jobsClick}>
                View Jobs
            </button>
        );
    } 
}

export default Jobs;

