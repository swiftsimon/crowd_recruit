import React from 'react';
import '../App.scss';

const Form = () => {

  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" tabindex="0" className="hidden" />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
    <button className="ui button" type="submit">Submit</button>
    <button className="ui button" type="submit">Cancel</button>
  </form>
  )
}

export default Form;
