import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class NutritonixResultsDisplay extends Component {
    render() {
        console.log("Test:", this.props.nutritionixResults)

        const hits = this.props.nutritionixResults.hits;
        return (
            <div className='nutritionixResultsDiv'>
                {hits
                    ? hits.map((result, i) => (
                        // <h1 key={i}>{result._score}</h1>
                        <div key={i} className='nutrinixResultsDiv'>
                            <Card header={<CardTitle reveal  image='' waves='light'/>}
                                title={result.fields.item_name}reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}><p><a href="#">This is a link</a></p>
                            </Card>
                        </div>
                        
                    ))
                    : ''}
            </div>
        );
    }

}

export default NutritonixResultsDisplay;