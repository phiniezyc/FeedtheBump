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
<<<<<<< HEAD
        <div s={9} className="search-container">
            <div className="searchDiv">
                {/* we can use this.state.input to reference but don't use to set!use setState */}
                <p> {this.state.input} </p>
                <div className='inputDiv'>
                    <form >
                        {/*// call api GET /api/whatever?search=${event.target.value}
                           // .then// this.setState({ results: results })*/}
                           <input onChange={event => this.setState({ input: event.target.value })} type='text' id='search' name='search'/>
                            <button onClick={this.passSearchTerm} className="btn search-button" type="submit" name="submit"> SEARCH </button>
                    </form>
                </div>
            </div>
=======
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
>>>>>>> 589bab759ecb97944ee06d7881e06899df3d617d
        </div>
    );
  }
}


export default { SearchBar,  };