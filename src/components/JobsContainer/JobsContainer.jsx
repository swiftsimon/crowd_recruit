import React, { Component } from 'react';

import JobTile from './JobTile/JobTile';
import JobFlyout from './JobFlyout/JobFlyout';
import SearchBar from '../SearchBar/SearchBar';
import PostJob from './PostJob/PostJob';

import './JobsContainer.scss';

class JobsContainer extends Component {
    
  constructor(props) {
    super(props);

    this.url = this.props.location.pathname;

    this.state = {
      showFlyout: false,
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

  onTermSubmit = (query) => {
    console.log("searching for", query)
    // TODO send query to database
  }

  render() {
    return (
      <div className='JobsContainerWrapper'>
        { this.url === '/view-jobs' && <SearchBar onTermSubmit={ this.onTermSubmit }/> }
        <div className='jobs-container'>
            { this.url === '/view-jobs' && <JobTile toggleFlyout={ this.toggleFlyout } /> }
            { this.url === '/view-jobs' && this.state.showFlyout && <JobFlyout /> }
            { this.url === '/post-job' && <PostJob />}
        </div>
      </div>
      );
  }
}

export default JobsContainer;
