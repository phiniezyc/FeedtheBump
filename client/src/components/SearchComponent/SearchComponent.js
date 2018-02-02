import React, { Component } from 'react';
import './SearchComponent.css';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Can set specific default values also!
      input: 'Not sure how many calories are in that bagel? Search here for nutrient data.',
    };  
    
  }

  passSearchTerm = () => {
    axios.get(`/api/nutritionix?searchTerm=${this.state.input}`)
    .then((response) => {
      this.props.updateResults(JSON.parse(response.data));
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };


  render() {
    return (
      <div className="searchDiv col s8">
        <div className='inputDiv'>
        <form >
        {/*// call api GET /api/whatever?search=${event.target.value}
            // .then// this.setState({ results: results })*/}
        <input onChange={event => this.setState({ input: event.target.value })} type='text' id='search' name='search'/>
        <button onClick={(event) => {
          event.preventDefault();
          this.passSearchTerm();
        }} className="btn btn-small waves-effect waves-light"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };