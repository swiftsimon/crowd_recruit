import React, { Component } from 'react';
import JobFlyout from '../JobFlyout/JobFlyout';
import './JobTile.scss';

class JobTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    
  }

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
              <button onClick={ this.props.toggleFlyout }>&rarr;</button>
              <button>&#x271A;</button>
            </div>
          </div>
        </div>

        <JobFlyout jobInfo={ this.props.jobInfo }/>
      </div>
    )
  }
}

export default JobTile;
