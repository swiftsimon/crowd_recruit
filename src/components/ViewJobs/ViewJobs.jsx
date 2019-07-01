import React, { Component } from 'react';
import JobTile from '../JobTile/JobTile';
import SearchBar from '../SearchBar/SearchBar';
import firebase from 'firebase';

import './ViewJobs.scss';

class ViewJobs extends Component {
    
  constructor(props) {
    super(props);

    let tag = this;

    this.state = {
      jobList: {},
    }

    this.removeFavouriteFromState = this.removeFavouriteFromState.bind(this);
    this.onCitySearch = this.onCitySearch.bind(this);

    switch(this.props.location.pathname) {
      case '/favourites': {
        let jobList = {};
        // get list all of job ids in favourites
        firebase.database().ref('FAVOURITES').once('value').then(function(snapshot) {
          let usersFavList = snapshot.val();
          if (usersFavList) {
            Object.keys(usersFavList).map((item, index) => {
              // get only the favourites that are under the current users id
              if (firebase.auth().currentUser && item === firebase.auth().currentUser.uid) {
                usersFavList = usersFavList[item];
                //get all jobs in the jobs database
                firebase.database().ref('JOBS').once('value').then(function(snapshot) {
                  let allJobs = snapshot.val();
                  Object.keys(usersFavList).forEach((item, index) => {
                    // match item against the job list and if they match, pull the object
                    if(Object.keys(allJobs).includes(item)) {
                      jobList[item] = allJobs[item];
                    }
                  });
                  tag.setState({
                    jobList
                  });
                  
                });
              }
            });
          } else {
            return false;
          }
        });
        break;
      }

      case '/view-jobs': {
        firebase.database().ref('JOBS').once('value').then(function(snapshot) {
          let jobList = snapshot.val();
          tag.setState({
            jobList,
          });
        });
        break;
      }

      default: return;
    }
  }

  removeFavouriteFromState(jobId) {
    const jobList = Object.assign({}, this.state.jobList);
    delete jobList[jobId];
    this.setState({ jobList });
  }


  // Send City search term and retreive jobs
  onCitySearch = (query) => {
    let tag = this;
    console.log("searching for", query)
    let jobList;

    firebase.database().ref('/JOBS/'+query).once('value').then(function(snapshot) {
      let jobListReturned = snapshot.val();
      jobList = {query: jobListReturned}
      tag.setState({
        jobList,
      });
    });
  }

  onTitleSearch = (query) => {
    let tag = this;
    let jobList;

    firebase.database().ref('/JOBS/').once('value').then(function(snapshot) {
    // TODO filter based on query term
      jobList = snapshot.val();
      tag.setState({
        jobList,
      });
    });
  }

  render() {
    let JobTiles;
    switch(this.props.location.pathname) {
      case '/favourites': {
        if (Object.keys(this.state.jobList).length) {
          JobTiles = Object.values(this.state.jobList).map((item,index) => {
            return <JobTile 
              key={ index } 
              jobInfo={ Object.values(item)[0] } 
              toggleFlyout={ this.toggleFlyout } 
              removeFavouriteFromState={ this.removeFavouriteFromState }
              location={ this.props.location.pathname }
              />;
          });
        } else {
          JobTiles = <h2>You have 0 job listings favourited.</h2>
        }
        break;
      }

      case '/view-jobs': {
        if (this.state.jobList) {
          JobTiles = Object.values(this.state.jobList).map((item,index) => {
            return <JobTile 
              key={ index } 
              jobInfo={ Object.values(item)[0] } 
              toggleFlyout={ this.toggleFlyout }
              location={ this.props.location.pathname }
              />;
          });
        } else {
          JobTiles = <h2>There are 0 jobs to view.</h2>
        }
        break;
      }

      default: return;
    }

    return (
      <div className='JobsContainerWrapper'>
        { this.props.location.pathname === '/view-jobs' && <SearchBar onCitySearch={ this.onCitySearch } onTitleSearch={ this.onTitleSearch }/> }
        <div className='jobs-container'>
            { JobTiles }
        </div>
      </div>
      );
  }
}

export default ViewJobs;
