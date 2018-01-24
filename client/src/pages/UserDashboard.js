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

    render() {
        console.log(this.state.totalMeals);
        console.log(this.state.totalWaters);
        
        
        return (
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
                <div>
                    <div className='meals'>
                        {this
                            .state
                            .totalMeals
                            .map((meal, i) => {
                                return (
                                    <div key={i}>
                                        <ol>
                                            <li key={meal.food}>{meal.food}</li>
                                            <li key={meal.calories}>{meal.calories}</li>
                                            <li key={meal.meal}>{meal.meal}</li>
                                            <li key={meal.date}>{meal.date}</li>
                                        </ol>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;