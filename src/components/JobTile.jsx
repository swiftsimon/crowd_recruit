import React, { Component } from 'react';
import Firebase from '../services/firebase';

class JobTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="ui link items">
        {/* <div className="item">
          <div className="ui tiny image">
            <img src="" alt="job tile" />
          </div>
          <div className="content">
            <div className="header">Lead Developer Role</div>
            <div className="description">
              <p>Opportunity to join a great team using React and Redux</p>
            </div>
          </div>
        </div> */}
        <div>
          <label>Job Title</label>    
          <label>Company Name</label> 
        </div>

        <div>
          <h2>Unique one liner</h2>
          <p>Job description</p>
          <label>Days ago</label>
        </div>

        <div>
          <span>-></span>
          <span>+</span>
        </div>
          
      </div>
    )
  }
}

export default JobTile;
