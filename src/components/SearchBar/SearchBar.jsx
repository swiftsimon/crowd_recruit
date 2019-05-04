import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.searchTerm);
  }

  render() {
    return(
      <div className="ui segment search-container">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <label>Job Search</label>
          <input 
            type="text"
            value={this.state.searchTerm}
            onChange={ (e) => this.setState({searchTerm: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;