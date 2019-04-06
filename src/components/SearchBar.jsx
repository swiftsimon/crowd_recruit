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
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui from">
                    <label style={{color:"black"}}>Job Search</label>
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