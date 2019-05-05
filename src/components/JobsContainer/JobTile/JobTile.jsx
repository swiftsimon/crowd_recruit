import React, { Component } from 'react';
// import Firebase from '../../../services/firebase';
import './JobTile.scss';

class JobTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="ui link items job-tile">
        <div className="jobs-left">
          <div className='job-titles'>
            <h2 className='jobs-title'>Job Title</h2>   
            <h2 className='job-company-name'>Company Name</h2> 
          </div>

          <div className='job-desc'>
            <h2>Do you want to get paid?</h2>
            <p>This is the coolest job ever. We have snacks and ping pong and we work only when we feel like it</p>
            <p className='job-posted'>4 Days ago</p>
          </div>
        </div>
        <div className="jobs-right">
          <div className='job-icons'>
            <button onClick={ this.props.toggleFlyout }>&rarr;</button>
            <button>&#x271A;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default JobTile;
