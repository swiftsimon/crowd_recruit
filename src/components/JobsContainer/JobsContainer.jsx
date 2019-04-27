import React, { Component } from 'react';
import JobTile from './JobTile/JobTile';
import JobFlyout from './JobFlyout/JobFlyout';
import './JobsContainer.scss';

class JobsContainer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showFlyout: false
        }

        this.toggleFlyout = this.toggleFlyout.bind(this);
    }

    toggleFlyout() {
        // make some api call to get flyout data and then mount flyout component with data as props
        let showFlyout = this.state.showFlyout ? false : true;
        this.setState({
            showFlyout
        });
    }

    render() {
        return (
            <div className='jobs-container'>
                <JobTile toggleFlyout={ this.toggleFlyout } />
                { this.state.showFlyout ? <JobFlyout /> : null }
            </div>
        );
    }
}

export default JobsContainer;
