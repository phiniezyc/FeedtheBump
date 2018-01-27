import React, { Component } from 'react';
import './SearchComponent.css';
// import axios from 'axios';

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
    //   let searchTerm = this.state.input;
    //   axios.post('/api/nutritionix/searchTerm',(req, res)=>{
    //       searchTerm;
    //   })
    //  .then(console.log(searchTerm));

  }

  render() {
    return (
      <div className="searchDiv">
        {/* we can use this.state.input to reference but don't use to set!use setState */}
        <h5> {this.state.input} </h5>
        <div className='inputDiv'>
        <form method="POST" action='/api/nutritionix/searchTerm'>
        <input onChange={event => this.setState({ input: event.target.value })} type='text' id='search' name='search'/>
        <button onClick={event => console.log("Submit button works")} className="btn btn-small waves-effect waves-light" type="submit" name="submit"> SUBMIT </button>
        </form>
        </div>
      </div>
    );
  }
}


export default { SearchBar,  };