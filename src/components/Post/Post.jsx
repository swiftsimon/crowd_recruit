import React, { Component } from 'react';
import './Post.css'
import '../../App.css'

class Post extends Component {
    constructor(props) {
        super();
        this.postClick = this.postClick.bind(this);

        this.state = {

        }
    }

    postClick = () => {
        console.log("Post Clicked")
    }

    render() {
        return (
            <button
            className="button button-main"
            onClick={this.postClick}>
                Post
            </button>
        )
    }
}

export default Post