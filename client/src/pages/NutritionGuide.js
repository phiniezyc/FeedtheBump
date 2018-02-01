import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import '../styles/NutritionGuide.css';


class NutritionGuide extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>

                        <div className='static'>
                            <h4>Nutrition Quick Reference Guide</h4>
                                <h6>Calories:</h6>
                                    <p>1st Trimester: No additional calories</p>
                                    <p>2nd and 3rd Trimester: Add 300 calories per day</p>

                                <br />
                                <h6>Daily Nutrient Goals::</h6>
                                    <p>Calcium: 1200 mg</p>
                                    <p>Folate: 600-800 mcg</p>
                                    <p>Iron: 27 mg</p>
                                    <p>Protein: 75-100 g</p>

                            <br />
                            <p>Learn about <a href="/foodstoavoid">foods to avoid</a> during pregnancy.</p>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NutritionGuide;