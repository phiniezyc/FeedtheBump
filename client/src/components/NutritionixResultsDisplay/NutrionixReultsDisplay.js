import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import "./NutritionixResultsDisplay.css";

class NutritonixResultsDisplay extends Component {
    render() {
        // console.log("Test:", this.props.nutritionixResults)
        const hits = this.props.nutritionixResults.hits;
        return (
            <div className='nutritionixResultsDiv'>
                {(hits || []).map((result, i) => (
                    <div key={i} className='nutritionixResultDiv'>
                        <Card className='cardDisplay' header={<CardTitle reveal  image='' waves='light'/>}
                              title={result.fields.item_name}reveal={<div><p>{`Calories: ${result.fields.nf_calories}`}</p><p>{`Protein: ${result.fields.nf_protein}`}</p><p>{`Calcium: ${result.fields.nf_calcium_dv}`}</p><p>{`Iron: ${result.fields.nf_iron_dv}`}</p></div>}>
                            <p>{`Brand Name: ${result.fields.brand_name}`}</p>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}

export default NutritonixResultsDisplay;
