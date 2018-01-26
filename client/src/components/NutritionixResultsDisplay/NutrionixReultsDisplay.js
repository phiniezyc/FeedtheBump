import React, { Component } from 'react';

class NutritonixResultsDisplay extends Component {
    render() {
        console.log("Test:",this.props.nutritionixResults)

        const hits = this.props.nutritionixResults.hits;
        return (
            <div className='nutritionixResultsDiv'>
                {hits ? hits.map((result, i) => (
                    <h1 key={i}>{result._score}</h1>
                )) : ''}
            </div>
        );
    }

}

export default NutritonixResultsDisplay;