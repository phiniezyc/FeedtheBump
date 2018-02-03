import React, { Component } from 'react';
import './NutritionixResultsDisplay.css';

class NutritonixResultsDisplay extends Component {
    render() {

        const hits = this.props.nutritionixResults.hits;

        return (
            <div className='card'>
                {(hits || []).map((result, i) => (
                <div>
                    <div key={i} className='card-content'>
                        <span className='card-title activator'>{result.fields.item_name}<i className='material-icons right'>more_vert</i></span>
                        <p>{`Brand Name: ${result.fields.brand_name}`}</p>

                        <div key={i} className='card-reveal'>
                            <span className='card-title activator'>{result.fields.item_name}<i className='material-icons right'>close</i></span>
                            <p>{`Calories: ${result.fields.nf_calories}`}</p>
                            <p>{`Protein: ${result.fields.nf_protein}`}</p>
                            <p>{`Calcium: ${result.fields.nf_calcium_dv}`}</p>
                            <p>{`Iron: ${result.fields.nf_iron_dv}`}</p>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>


        )
    }
}

export default NutritonixResultsDisplay;
