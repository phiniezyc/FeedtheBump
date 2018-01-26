import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import "./NutritionixResultsDisplay.css";

class NutritonixResultsDisplay extends Component {
    render() {
        console.log("Test:", this.props.nutritionixResults)

        const hits = this.props.nutritionixResults.hits;
        return (
            <div className='nutritionixResultsDiv'>
                {hits
                    ? hits.map((result, i) => (
                        // <h1 key={i}>{result._score}</h1>
                        <div key={i} className='nutritionixResultDiv'>
                            <Card className='cardDisplay' header={<CardTitle reveal  image='' waves='light'/>}
                                title={result.fields.item_name}reveal={<div><p>{`Calories: ${result.fields.nf_calories}`}</p><p>{`Protein: ${result.fields.nf_protein}`}</p></div>}><p><a href="/">This is a link</a></p>
                                
                            </Card>
                        </div>
                        
                    ))
                    : ''}
            </div>
        );
    }

}

export default NutritonixResultsDisplay;