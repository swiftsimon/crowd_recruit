import React, { Component } from 'react';
import JobFlyout from '../JobFlyout/JobFlyout';
import firebase from 'firebase';
import generateUID from 'uniqid';
import './JobTile.scss';

class JobTile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFlyout: false,
    }

    this.toggleFlyout = this.toggleFlyout.bind(this);
  }

  toggleFlyout() {
    // make some api call to get flyout data and then mount flyout component with data as props
    let showFlyout = this.state.showFlyout ? false : true;
    this.setState({
      showFlyout,
    });
  }

  addToFavourites(loggedInUser, jobId) {
    firebase.database().ref(`FAVOURITES/userId-${ loggedInUser.uid }/${ jobId }`).set({
      jobId
  });
  }

  render() {
    const loggedInUser = firebase.auth().currentUser;
    const {
      uid,
      title, 
      company, 
      location, 
      tagline, 
      shortDesc, 
      longDesc,
      roleDetails
    } = this.props.jobInfo;
    
    return (
      <div className='jobTileWrapper'>
        <div className="ui link items job-tile">
          <div className="jobs-left">
            <div className='job-titles'>
              <h2 className='jobs-title'>{ title }</h2>   
              <h2 className='job-company-name'>{ company }</h2> 
            </div>

            <div className='job-desc'>
              <h2>{ tagline }</h2>
              <p>{ shortDesc }</p>
              <p className='job-posted'>4 Days ago</p>
            </div>
          </div>
          <div className="jobs-right">
            <div className='job-icons'>
              <button onClick={ this.toggleFlyout }>&rarr;</button>

              {/* in time we will need to connect this to the users logged in id when 
              they favourite a job. it will post this job under their id in the database
              so when they go to the favourites page we will search favourites based on user id */}
              <button onClick={ () => this.addToFavourites(loggedInUser, uid) }>&#x271A;</button>
            </div>
          </div>
        </div>

        { this.state.showFlyout && <JobFlyout  jobInfo={ this.props.jobInfo }/> }
      </div>
    )
  }
}

export default JobTile;
