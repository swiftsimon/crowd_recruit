import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  state = {
    citySearchTerm: '',
    titleSearchTerm: '',
  }

  onCitySearch = (e) => {
    e.preventDefault();
    let cleanedTerm = this.state.citySearchTerm.trim().toLowerCase();
    this.props.onCitySearch( cleanedTerm );
  }

  onTitleSearch = (e) => {
    e.preventDefault();
    let cleanedTerm = this.state.titleSearchTerm.trim().toLowerCase();
    this.props.onTitleSearch( cleanedTerm);
  }

  render() {
    return(
      <div className="search-bar-wrapper">
        <div className="search-container">
          <form onSubmit={ this.onCitySearch }>
            <label>City</label>
            <input 
              type="text"
              value={this.state.citySearchTerm}
              onChange={ (e) => 
                this.setState({citySearchTerm: e.target.value})}
            />
          </form>
        </div>
        <div className="search-container">
        <form onSubmit={ this.onTitleSearch }>
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