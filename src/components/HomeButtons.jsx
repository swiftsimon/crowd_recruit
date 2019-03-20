import React, { Component } from 'react';
import '../App.css';

class HomeButtons extends Component {

  constructor (props){
    super(props);
        
    this.state = {
      check: true,
      words: "testing"
    }
  }

  jobsClick = () => {
    this.setState({cool: "stuff"})
    console.log('View Jobs Clicked', this)
  }

  postClick = () => {
    console.log("Post Clicked", this)
  }

  referClick = () => {
    console.log("Refer Click", this)
  }

  render() {
    return (
      <div className="ui buttons">
        <button
        className="ui button"
        onClick={this.jobsClick}>
          View Jobs
        </button>
        <button
        className="ui button"
        onClick={this.postClick}>
        Post
        </button>
        <button
          className="ui button"
          onClick={this.referClick}>
          Refer
        </button>
      </div>
    );
  } 
}

export default HomeButtons;
