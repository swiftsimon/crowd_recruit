import React, { Component } from 'react';
import './JobFlyout.scss';

export default class Flyout extends Component {

    render() {
        return (
            <div className='flyout-container'>
                <div className='flyout-title-container'>
                    <h2 className='flyout-job-title'>Title</h2>
                    <h2 class='flyout-company-name'>Company</h2>
                </div>

                <div className='flyout-attraction-container'>
                    Small paragraph, attract the reader, why should they work for you, be inspiring, what makes this role/company great!
                </div>

                <div className='flyout-job-details-container'>
                    Talk about the role, what will the applicant be doing, who will they interact with, how will their time be split
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
                
                <button className='flyout-apply-refer-button'>Apply or Refer</button>

                <div className='flyout-image'>

                </div>            
            </div>
        );
    }
}
