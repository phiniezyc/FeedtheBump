import React, {Component} from 'react';
import {Collection, CollectionItem, Row} from 'react-materialize';
import API from '../utils/API';
import '../styles/Widgets.css';


import MealDashboard from '../components/UserDashboard/MealDashboard';

class UserDashboard extends Component {
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
            <div>

                <div>
                    <h1>{`Total Iron: ${this.filterTotalDailyIron()}`}</h1>
                </div>
                <div>
                    <h1>{`Total Calcium: ${this.filterTotalDailyCalcium()}`}</h1>
                </div>
                <div>
                    <h1>{`Total Protein: ${this.filterTotalDailyProtein()}`}</h1>
                </div>

                <div>
                    <h1>{`Total Calories: ${this.filterTotalDailyCalories()}`}</h1>

                </div>
                <div>
                    <Row>
                        <MealDashboard/>
                        <div className='col s8 offset-s2'>
                            <Collection header='Daily Diary'>
                                <CollectionItem href='#'>Breakfast</CollectionItem>
                                <CollectionItem href='#'>Lunch</CollectionItem>
                                <CollectionItem href='#'>Dinner</CollectionItem>
                                <CollectionItem href='#'>Snacks</CollectionItem>
                                <CollectionItem href='#'>Water</CollectionItem>
                            </Collection>
                            <p className="left-align">
                                <button
                                    className="btn btn-small waves-effect waves-light"
                                    type="button"
                                    name="action">
                                    + Add</button>
                            </p>
                            {/* We should change this button to either the "+" OR a picture button  */}
                        </div>
                    </Row>
                </div>
                <div className='mealsDiv'>
                    <div className='meals'>
                        <ol>
                            {this
                                .state
                                .totalMeals
                                .map((meal, i) => {
                                    return (
                                        <li key={i}>
                                            <div key={i}>
                                                <ol>
                                                    <li key={meal.food}>{meal.food}</li>
                                                    <li key={meal.calories}>{meal.calories}</li>
                                                    <li key={meal.protein}>{meal.protein}</li>
                                                    <li key={meal.calcium}>{meal.calcium}</li>
                                                    <li key={meal.iron}>{meal.iron}</li>
                                                    <li key={meal.id}>{meal.meal}</li>
                                                    <li key={meal.date}>{meal.date}</li>
                                                </ol>
                                            </div>
                                        </li>
                                    )
                                })}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;
