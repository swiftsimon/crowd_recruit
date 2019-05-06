import React, { Component } from 'react';
import Firebase from '../../services/firebase';
import JobTile from './JobTile/JobTile';
import JobFlyout from './JobFlyout/JobFlyout';
import SearchBar from '../SearchBar/SearchBar';
import PostJob from './PostJob/PostJob';

import './JobsContainer.scss';

class JobsContainer extends Component {
    
  constructor(props) {
    super(props);

    let tag = this;
    this.url = this.props.location.pathname;

    this.state = {
      showFlyout: false,
      jobList: {},
    }

    Firebase.ref('JOBS').once('value').then(function(snapshot) {
      let jobList = snapshot.val();
      console.log(snapshot.val())
      tag.setState({
        jobList,
      });
    });


    this.toggleFlyout = this.toggleFlyout.bind(this);
  }

  toggleFlyout(jobInfo) {
    // make some api call to get flyout data and then mount flyout component with data as props
    let showFlyout = this.state.showFlyout ? false : true;
    this.setState({
      showFlyout,
      //flyoutItem
    });
  }

  onTermSubmit = (query) => {
    console.log("searching for", query)
    // TODO send query to database
  }

  render() {
    const JobTiles = Object.values(this.state.jobList).map((item,index) => {
      console.log('lol', Object.keys(this.state.jobList ))
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
            {/* { this.url === '/view-jobs' && this.state.showFlyout && <JobFlyout /> } */}

            { this.url === '/post-job' && <PostJob />}
        </div>
      </div>
      );
  }
}

export default JobsContainer;
