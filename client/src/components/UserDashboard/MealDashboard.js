import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './UserDashboard.css';
import API from '../../utils/API';

class MealDashboard extends Component {

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

    filterBreakfast = () => {
        return (this.state.totalMeals || []).filter((meal) => {

            return meal.meal === "Breakfast";
        })
    }

    // console.log(filterBreakfast.toString());


    // filterTotalDailyProtein = () => {
    //     return (this.state.totalMeals || []).reduce((sum, meal) => {
    //
    //         return sum += meal.protein;
    //     }, 0)
    // }
    //
    // filterTotalDailyCalcium = () => {
    //     return (this.state.totalMeals || []).reduce((sum, meal) => {
    //
    //         return sum += meal.calcium;
    //     }, 0)
    // }
    //
    // filterTotalDailyIron = () => {
    //     return (this.state.totalMeals || []).reduce((sum, meal) => {
    //
    //         return sum += meal.iron;
    //     }, 0)
    // }
    render() {
        console.log(this.state.totalMeals);
        console.log(this.state.totalWaters);

        return (
            <div className="meal-container">
                <Row>
                    <Col s={12}>

                        <div className='meal-card'>

                            <div className='meal-totals'>

                                <div className="meal">
                                    <div>
                                        <h5>Breakfast</h5>
                                    </div>
                                    <p>{`${this.filterBreakfast()}`}</p>
                                </div>

                                <div className="meal">
                                    <div>
                                        <h5>Lunch</h5>
                                    </div>
                                    <p>{`${this.filterBreakfast()}`}</p>
                                </div>

                                <div className="meal">
                                    <div>
                                        <h5>Dinner</h5>
                                    </div>
                                    <p>{`${this.filterBreakfast()}`}</p>
                                </div>

                                <div className="meal">
                                    <div>
                                        <h5>Snacks</h5>
                                    </div>
                                    <p>{`${this.filterBreakfast()}`}</p>
                                </div>

                            </div>

                        </div>

                    </Col>
                </Row>
            </div>
        )}}


export default MealDashboard;
