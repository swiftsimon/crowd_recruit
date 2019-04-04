import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        value={this.state.searchTerm}
                        onChange={e =>this.setState({searchTerm: e.target.value})}
                    />
                </form>
            </div>
        )
    }

}