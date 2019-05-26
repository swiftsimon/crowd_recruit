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

    switch(this.props.location.pathname) {
      case '/favourites': {
        let jobList = [];
        // get list all of job ids in favourites
        firebase.database().ref('FAVOURITES').once('value').then(function(snapshot) {
          let usersFavList = snapshot.val();
          if (usersFavList) {
            Object.keys(usersFavList).map((item, index) => {
              // get only the favourites that are under the current users id
              if (item === firebase.auth().currentUser.uid) {
                usersFavList = usersFavList[item];
                //get all jobs in the jobs database
                firebase.database().ref('JOBS').once('value').then(function(snapshot) {
                  let allJobs = snapshot.val();
                  Object.keys(usersFavList).forEach((item, index) => {
                    // match item against the job list and if they match, pull the object
                    if(Object.keys(allJobs).includes(item)) {
                      jobList.push(allJobs[item]);
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

  onTermSubmit = (query) => {
    console.log("searching for", query)
    // TODO send query to database
  }

  render() {
    let JobTiles;
    switch(this.props.location.pathname) {
      case '/favourites': {
        if (Object.keys(this.state.jobList).length) {
          console.log('hi', this.state.jobList)
          JobTiles = Object.values(this.state.jobList).map((item,index) => {
            return <JobTile key={ index } jobInfo={ Object.values(item)[0] } toggleFlyout={ this.toggleFlyout } />;
          });
        } else {
          console.log('bye')
          JobTiles = <h2>You have no jobs favourited yet.</h2>
        }
        break;
      }

      case '/view-jobs': {
        if (this.state.jobList) {
          JobTiles = Object.values(this.state.jobList).map((item,index) => {
            return <JobTile key={ index } jobInfo={ Object.values(item)[0] } toggleFlyout={ this.toggleFlyout } />;
          });
        } else {
          JobTiles = <h2>There are no jobs to view.</h2>
        }
        break;
      }

      default: return;
    }


    return (
      <div className='JobsContainerWrapper'>
        { this.props.location.pathname === '/view-jobs' && <SearchBar onTermSubmit={ this.onTermSubmit }/> }
        <div className='jobs-container'>
            { JobTiles }
        </div>
      </div>
      );
  }
}

export default ViewJobs;
