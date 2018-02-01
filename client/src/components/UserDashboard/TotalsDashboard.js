import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './UserDashboard.css';
import API from '../../utils/API';

class TotalsDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalMeals: [],
            totalWaters: []
        };
    }

    componentDidMount() {
        this.loadMeals();
        this.loadWaters();
        this.filterTotalDailyCalories();
    }

    loadMeals() {
        API
            .getMeals()
            .then(res => this.setState({totalMeals: res.data, food: '', calories: '', meal: '', date: ''}))
            .catch(err => console.log(err));
    }

    loadWaters() {
        API
            .getWaters()
            .then(res => this.setState({totalWaters: res.data, water: ''}))
            .catch(err => console.log(err));
    }

    filterTotalDailyCalories = () => {
        return (this.state.totalMeals || []).reduce((sum, meal) => {

            return sum += meal.calories;
        }, 0)
    }

    filterTotalDailyProtein = () => {
        return (this.state.totalMeals || []).reduce((sum, meal) => {

            return sum += meal.protein;
        }, 0)
    }

    filterTotalDailyCalcium = () => {
        return (this.state.totalMeals || []).reduce((sum, meal) => {

            return sum += meal.calcium;
        }, 0)
    }

    filterTotalDailyIron = () => {
        return (this.state.totalMeals || []).reduce((sum, meal) => {

            return sum += meal.iron;
        }, 0)
    }

    render() {

        return (
            <div className='totals-container'>
                <Row>
                    <Col s={12}>
                        <div className='today-card'>
                            <h4>Today's Totals</h4>

                            <div className='today-totals'>

                                <div className="nutrient">
                                    <div className="nutrient-title">
                                        <p>{`Calories: `}</p>
                                    </div>
                                    <div className="nutrient-total">
                                        <p>{`${this.filterTotalDailyCalories()}`}</p>
                                    </div>
                                </div>

                                <div className="nutrient">
                                    <div className="nutrient-title">
                                        <p>{`Calcium: `}</p>
                                    </div>
                                    <div className="nutrient-total">
                                        <p>{`${this.filterTotalDailyCalcium()} mg`}</p>
                                    </div>
                                </div>

                                <div className="nutrient">
                                    <div className="nutrient-title">
                                        <p>{`Protein: `}</p>
                                    </div>
                                    <div className="nutrient-total">
                                        <p>{`${this.filterTotalDailyProtein()} g`}</p>
                                    </div>
                                </div>

                                <div className="nutrient">
                                    <div className="nutrient-title">
                                        <p>{`Iron: `}</p>
                                    </div>
                                    <div className="nutrient-total">
                                        <p>{`${this.filterTotalDailyIron()} mg`}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TotalsDashboard;