import React, { Component, createRef } from 'react';
import Firebase from '../../../services/firebase';
import generateUID from 'uniqid';
import './PostJob.scss';

export default class JobPost extends Component {

    constructor() {
        super();

        this.titleRef = createRef('titleRef');
        this.companyRef = createRef('companyRef');
        this.locationRef = createRef('locationRef');
        this.taglineRef = createRef('taglineRef');
        this.shortDescRef = createRef('shortDescRef');
        this.longDescRef = createRef('longDescRef');
        this.roleDetailsRef = createRef('roleDetailsRef');

        console.log(generateUID())
    }

    componentDidMount() {
        const postJobForm = document.querySelector('.post-job-form');
        postJobForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // note: add some code to stop form from submitting if location is '--select location--'
            const jobPostData = {
                title: this.titleRef.current.value,
                company: this.companyRef.current.value,
                location: this.locationRef.current.value,
                tagline: this.taglineRef.current.value,
                shortDesc: this.shortDescRef.current.value,
                longDesc: this.longDescRef.current.value,
                roleDetails: this.roleDetailsRef.current.value,
            }

            Firebase.ref(`JOBS/${ generateUID() }/${ this.locationRef.current.value }/${ this.companyRef.current.value }`).set({
                ...jobPostData
            });
        });
      }
    
    render() {
        // note: we will in time have to link each posted job to the ID of the logged in employer account creating the post
        // just to keep track of whos posting what, and also so the user can retreive their job postings theyve posted
        return (
            <div className='JobPostWrapper'>
                <h2>Post a Job</h2>

                <form className='post-job-form'>
                    <input ref={ this.titleRef } type='text' placeholder='Job Title...' />
                    <input ref={ this.companyRef } type='text' placeholder='Company Name...' />
                    <select ref={ this.locationRef }>
                        <option defaultValue="--Select Location--">--Select Location--</option>
                        <option value='Toronto'>Toronto</option>
                    </select>

                    <input ref={ this.taglineRef } type='text' placeholder='Cool tagline...' />
                    <textarea ref={ this.shortDescRef } placeholder='Short attention grabbing job descrition...'></textarea>
            
                    <textarea ref={ this.longDescRef } placeholder='Small paragraph, attract the reader, why should they work for you, be inspiring, what makes this role/company great?'></textarea>
               
                    <textarea ref={ this.roleDetailsRef } placeholder='Talk about the role, what will the applicant be doing, who will they interact with, how will their time will be spent.'></textarea>
                        {/* List of 4-6 must haves
                  
                        List of 3-4 nice to haves
               
           
                        List of tech stack and tools
            
                        Perks
                 
                        image */}
                    <button className='submit-job'>Submit</button>
                </form>
            </div>
        );
    }
}