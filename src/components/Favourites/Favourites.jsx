import React, { Component } from 'react';
import ViewJobs from '../ViewJobs/ViewJobs';

export default class Favourites extends Component {

    render() {
        return (
            <div>
                <h2>Your Favourites</h2>
                <ViewJobs />
            </div>
        );
    }
}
