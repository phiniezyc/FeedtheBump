import React, { Component } from 'react';
import './SearchComponent.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Can set specific default values also!
      input: 'The text you type will show up here!',
    };
  }
  render() {
    return (
      <div className="searchDiv">
        {/* we can use this.state.input to reference but don't use to set!use setState */}
        <h5> {this.state.input} </h5>
        <div className='inputDiv'>
        <input onChange={event => this.setState({ input: event.target.value })} />
        </div>
      </div>
    );
  }
}


export default SearchBar;