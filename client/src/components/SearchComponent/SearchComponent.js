import React, { Component } from 'react';
import './SearchComponent.css';
import axios from 'axios';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Can set specific default values also!
      input: 'Not sure how many calories are in that bagel? Search here for nutrient data.',
    };  
    
  }

  passSearchTerm = _.throttle(() => {
    axios.get(`/api/nutritionix?searchTerm=${this.state.input}`)
    .then(function (response) {
      this.props.updateResults(response.data);
      console.log(response.data.hits[0].fields.item_name);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, 800);


  render() {
    return (
      <div className="searchDiv col s8">
        {/* we can use this.state.input to reference but don't use to set!use setState */}
        <p> {this.state.input} </p>
        <div className='inputDiv'>
        <form >
        {/*// call api GET /api/whatever?search=${event.target.value}
            // .then// this.setState({ results: results })*/}
        <input onChange={event => this.setState({ input: event.target.value })} type='text' id='search' name='search'/>
        <button onClick={this.passSearchTerm} className="btn btn-small waves-effect waves-light" type="submit" name="submit"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };