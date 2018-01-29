import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
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
            <div className="container">

                <div className='meal-card'>

                            <div className='today-meals'>

                                <Card className='cardDisplay' header={
                                    <CardTitle reveal  image='' waves='light'/>}
                                      title="Breakfast">

                                    <div>
                                        <p>{`Breakfast: ${this.filterBreakfast()}`}</p>
                                    </div>


                                            {/*<ul>*/}
                                                {/*/!*<li key={meal.id}>{meal.meal}</li>*!/*/}
                                                {/*/!*<li key={meal.food}>{meal.food}</li>*!/*/}
                                                {/*/!*<li key={meal.calories}>{meal.calories}</li>*!/*/}
                                                {/*/!*<li key={meal.protein}>{meal.protein}</li>*!/*/}
                                                {/*/!*<li key={meal.calcium}>{meal.calcium}</li>*!/*/}
                                                {/*/!*<li key={meal.iron}>{meal.iron}</li>*!/*/}
                                                {/*/!*<li key={meal.date}>{meal.date}</li>*!/*/}
                                            {/*</ul>*/}
                                </Card>

                            </div>


                </div>
            </div>
        )}}


export default MealDashboard;
