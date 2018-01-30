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
        // console.log(this.state.totalMeals);
    }

    loadWaters() {
        API
            .getWaters()
            .then(res => this.setState({totalWaters: res.data, water: ''}))
            .catch(err => console.log(err));
        // console.log(this.state.totalMeals);
    }
    //this function doesn't work, but my inline code does.  Not sure why?
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
        console.log(this.state.totalMeals);
        console.log(this.state.totalWaters);

        return (
            <div className='totals-container'>
                <Row>
                    <Col s={12}>
                        <div className='today-card'>

                            <div>
                                <h4>Today's Totals</h4>
                            </div>
                            <div className='today-totals'>

                                <div className="nutrient-total">
                                    <p>{`Calories: ${this.filterTotalDailyCalories()}`}</p>
                                </div>
                                <div className="nutrient-total">
                                    <p>{`Calcium: ${this.filterTotalDailyCalcium()}`}</p>
                                </div>
                                <div className="nutrient-total">
                                    <p>{`Protein: ${this.filterTotalDailyProtein()}`}</p>
                                </div>
                                <div className="nutrient-total">
                                    <p>{`Iron: ${this.filterTotalDailyIron()}`}</p>
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