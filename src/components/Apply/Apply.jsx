import React, { Component } from 'react';
import './Apply.css';
import '../../App.css'

class Apply extends Component {

    constructor (props){
        super(props);
        this.applyClick = this.applyClick.bind(this);

        this.state = {

        }
    }

    applyClick = () => {
        console.log('Apply Clicked')
    }

    render() {

        return (
            <button
            className="button button-main"
            onClick={this.applyClick}>
                Apply
            </button>
        );
    } 
}

export default Apply;

