import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './JobFlyout.scss';

export default class Flyout extends Component {

    constructor() {
        super();

        this.email = createRef('email');
        this.number = createRef('number');
    }

    componentDidMount() {
        const form = document.querySelector('.referral-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.email.current.value) {
                axios.post('http://localhost:4000/api/email', {
                    email: this.email.current.value
                });
            }

            if (this.number.current.value) {
                axios.post('http://localhost:4000/api/text', 
                    { 
                        number: this.number.current.value, 
                        message: 'Check out this cool Job Opportunity at www.crowdrecruit.com' 
                    }
                );
            }
        });
    }

    render() {

        const {
            title, 
            company, 
            location, 
            tagline, 
            shortDesc, 
            longDesc,
            roleDetails
          } = this.props.jobInfo;

        return (
            <div className='flyout-container'>
                <div className='flyout-title-container'>
                    <h2 className='flyout-job-title'>{ title }</h2>
                    <h2 className='flyout-company-name'>{ company }</h2>
                </div>

                <div className='flyout-attraction-container'>
                    { longDesc }
                </div>

                <div className='flyout-job-details-container'>
                    { roleDetails }
                </div>

                <div className='flyout-haves-container'>
                    <div className='flyout-must-have-container'>
                        List of 4-6 must haves
                    </div>
                    <div className='flyout-nice-to-have-container'>
                        List of 3-4 nice to haves
                    </div>
                </div>

                <div className='flyout-extras-container'>
                    <div className='flyout-tech-container'>
                        List of tech stack and tools
                    </div>
                    <div className='flyout-perks-container'>
                        Perks
                    </div>
                </div>

                <form className="referral-form">
                    <label for="email">Email: </label>
                    <input ref={this.email} type="text" className="email" />
                    <br />
                    <label for="text">Cell# Text: </label>
                    <input ref={this.number} type="tel" className="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <br />
                    <button>Submit Referral</button>
                </form>
                <div className='flyout-image'>

                </div>            
            </div>
        );
    }
}
