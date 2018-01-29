import React, { Component } from 'react';
import './SearchComponent.css';
import API from '../../utils/API';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Can set specific default values also!
      input: 'The text you type will show up here!',
    };  
    
  }
  componentDidUpdate() {
      this.passSearchTerm();
  }
  passSearchTerm = () => {
    API.sendUserSearchInput({input: this.state.input})
    .then(console.log(this.state.input))
  }
  

  sendSearchTerm = () => {
    axios.get('/api/nutritionix/userSearch', {
      params: {
        input: this.state.input
      }
    });
  }


  render() {
    return (
      <div className="searchDiv">
        {/* we can use this.state.input to reference but don't use to set!use setState */}
        <h5> {this.state.input} </h5>
        <div className='inputDiv'>
        <form >
        {/*// call api GET /api/whatever?search=${event.target.value}
            // .then// this.setState({ results: results })*/}
        <input onChange={event => this.setState({ input: event.target.value })} type='text' id='search' name='search'/>
        <button onClick={this.sendSearchTerm()} className="btn btn-small waves-effect waves-light" type="submit" name="submit"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };