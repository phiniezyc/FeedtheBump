import React, { Component } from 'react';
import './SearchComponent.css';
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
    axios.get(`/api/nutritionix?searchTerm=${this.state.input}`)
    .then(function (response) {
      console.log(response.data.hits[0].fields.item_name)
    })
    .catch(function (error) {
      console.log(error);
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
        <button onClick={this.passSearchTerm()} className="btn btn-small waves-effect waves-light" type="submit" name="submit"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };