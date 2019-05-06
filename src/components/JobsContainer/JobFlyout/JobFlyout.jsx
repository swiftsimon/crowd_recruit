import React, { Component } from 'react';
import './JobFlyout.scss';

export default class Flyout extends Component {

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
                
                <button className='flyout-apply-refer-button'>Apply or Refer</button>

                <div className='flyout-image'>

                </div>            
            </div>
        );
    }
}
