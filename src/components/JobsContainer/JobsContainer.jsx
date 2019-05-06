import React, { Component } from 'react';
import Firebase from '../../services/firebase';
import JobTile from './JobTile/JobTile';
import SearchBar from '../SearchBar/SearchBar';
import PostJob from './PostJob/PostJob';

import './JobsContainer.scss';

class JobsContainer extends Component {
    
  constructor(props) {
    super(props);

    let tag = this;
    this.url = this.props.location.pathname;

    this.state = {
      jobList: {},
    }

    Firebase.ref('JOBS').once('value').then(function(snapshot) {
      let jobList = snapshot.val();
      tag.setState({
        jobList,
      });
    });
  }

  onTermSubmit = (query) => {
    console.log("searching for", query)
    // TODO send query to database
  }

  render() {
    const JobTiles = Object.values(this.state.jobList).map((item,index) => {
      return <JobTile key={ index } jobInfo={ Object.values(item[Object.keys(item)])[0] } toggleFlyout={ this.toggleFlyout } />;
    });

    return (
      <div className='JobsContainerWrapper'>
        { this.url === '/view-jobs' && <SearchBar onTermSubmit={ this.onTermSubmit }/> }
        <div className='jobs-container'>
            
            { 
              this.url === '/view-jobs'
              && Object.keys(this.state.jobList).length > 0
              && JobTiles 
            }

            { this.url === '/post-job' && <PostJob />}
        </div>
      </div>
      );
  }
}

export default JobsContainer;
