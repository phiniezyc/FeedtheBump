import React, { Component } from 'react';
import './SearchComponent.css';
import API from '../../utils/API';
// import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Can set specific default values also!
      input: 'The text you type will show up here!',
      results: []
    };  
    
  }
  componentDidUpdate() {
      this.passSearchTerm();
  }
  passSearchTerm = () => {
    //   let userSearchInput = this.state.input
    API.sendUserSearchInput({userSearchInput: this.state.input})
    .then(console.log(this.state.input))
  }

  render() {
    return (
      <div className="searchDiv">
        {/* we can use this.state.input to reference but don't use to set!use setState */}
        <h5> {this.state.input} </h5>
        <div className='inputDiv'>
        <form >
        <input onChange={event => { 
            // call api GET /api/whatever?search=${event.target.value}
            // .then
            // this.setState({ results: results })
        }} type='text' id='search' name='search'/>
        <ul>
        { this.state.results.length === 0 && <li>No results</li>}
        { this.state.results.map(item => (
            <li>my result</li>
        ))}
        </ul>
        <button onClick={this.passSearchTerm} className="btn btn-small waves-effect waves-light" type="submit" name="submit"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };