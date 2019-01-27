import React, { Component } from 'react';
import './Refer.css';
import '../../App.css';

class Refer extends Component {
	constructor(props) {
		super();

		this.state = {

			}
  }
  
  referClick = () => {
    console.log("Refer Click")
  }

	render() {
		return (
			<button
			className="button button-main"
			onClick={this.referClick}>
				Refer
			</button>
		);
	}
}

export default Refer;