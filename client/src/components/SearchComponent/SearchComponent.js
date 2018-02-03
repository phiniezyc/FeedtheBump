import React, { Component } from 'react';
import { Button } from 'react-materialize';
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
            <div className='searchDiv'>
                <form>
                    <h5>Search for Nutrition Info</h5>
                    <p>Not sure how many calories are in that bagel? Search here to find out.</p>

                    <div className='search-functions'>
                        <div className='search-input'>
                            <input onChange={event => this.setState({ input: event.target.value })}
                                type='text' id='search' name='search' placeholder='Enter food to find nutrition information'/>
                        </div>
                        <div className='search-button'>
                            <Button onClick={(event) => {
                                event.preventDefault();
                                this.passSearchTerm();
                                }} className='btn btn-small search'
                                icon='search'>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default { SearchBar,  };
