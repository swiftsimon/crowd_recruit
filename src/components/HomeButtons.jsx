import React, { Component } from 'react';
import './HomeButtons.css';
import '../App.css';

class HomeButtons extends Component {

  constructor (props){
    super(props);
    // this.jobsClick = this.jobsClick.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.postClick = this.postClick.bind(this);
    // this.referClick = this.referClick.bind(this);
        
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

