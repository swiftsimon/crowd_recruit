import React, { Component } from 'react';
import Firebase from '../services/firebase';

class JobTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    Firebase.ref('jobs/web/toronto').set({
        username: 'ladiesman217',
        email: 'ladiesman217@gmail.com',
      });

      // Firebase.ref('user2').remove();

      // Firebase.ref('janitor').on("value", function(snapshot) {
      //    alert(snapshot.val());
      // }, function (error) {
      //    console.log("Error: " + error.code);
      // });

      // Firebase.ref().on("value", function(snapshot) {
      //    alert(snapshot.val().janitor);
      // }, function (error) {
      //    console.log("Error: " + error.code);
      // });

    // }
  }

  render() {
    return (
      <div className="ui link items">
        <div className="item">
          <div className="ui tiny image">
            <img src="" alt="job tile" />
          </div>
          <div className="content">
            <div className="header">Lead Developer Role</div>
            <div className="description">
              <p>Opportunity to join a great team using React and Redux</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <img src="" alt="job tile" />
          </div>
          <div className="content">
            <div className="header">Project Manager</div>
            <div className="description">
              <p>No weekend work!!!</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <img src="" alt="job tile" />
          </div>
          <div className="content">
            <div className="header">Community Manager</div>
            <div className="description">
              <p>Get paid to have fun!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobTile;
