import React, {Component} from 'react';
import {Collection, CollectionItem, Row} from 'react-materialize';
import API from '../utils/API';

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
        // this.filterTotalDailyCalories();
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

    filterTotalDailyCalories = () => {
        const TotalDailyCalories = (this.state.totalMeals || []).reduce((sum, meal) => {
            return sum += meal.calories;
        }, 0) 
          console.log(`Total Calories: ${TotalDailyCalories}`); 
    }


    render() {
        console.log(this.state.totalMeals);
        console.log(this.state.totalWaters);
        // this.filterTotalDailyCalories();

        return (
            <div>
                
                <div>
                    <h1>{`Calorie Test: ${(this.state.totalMeals || []).reduce((sum, meal) => {
                        return sum += meal.calories;
                    }, 0)}`}</h1>
                    <h4>{this.filterTotalDailyCalories()}</h4>
                </div>
                <div>
                    <Row>
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
                        {this.state.totalMeals.map((meal, i) => {
                                return (
                                    <li key={i}>
                                    <div key={i}>
                                        <ol>
                                            <li key={meal.food}>{meal.food}</li>
                                            <li key={meal.calories}>{meal.calories}</li>
                                            <li key={meal.meal}>{meal.meal}</li>
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
