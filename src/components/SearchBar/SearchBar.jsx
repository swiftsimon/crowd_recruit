import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    citySearchTerm: '',
    titleSearchTerm: '',
  }

  onCitySearch = (e) => {
    e.preventDefault();
    this.props.onCitySearch(this.state.citySearchTerm);
  }

  onTitleSearch = (e) => {
    e.preventDefault();
    this.props.onTitleSearch(this.state.titleSearchTerm)
  }

  render() {
    return(
      <div>
        <div className="ui segment search-container">
        <span>Search by City</span>
          <form onSubmit={ this.onCitySearch } className="ui form">
            <label>City</label>
            <input 
              type="text"
              value={this.state.citySearchTerm}
              onChange={ (e) => this.setState({citySearchTerm: e.target.value})}
            />
          </form>
        </div>
        <div className="ui segment search-container">
        <span>Search by Job Title</span>
        <form onSubmit={ this.onTitleSearch } className="ui form">
          <label>Job Title</label>
          <input 
            type="text"
            value={this.state.titleSearchTerm}
            onChange={ (e) => this.setState({titleSearchTerm: e.target.value})}
          />
        </form>
      </div>
    </div>
    )
  }
}

export default SearchBar;