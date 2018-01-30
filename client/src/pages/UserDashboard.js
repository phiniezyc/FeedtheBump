import React, {Component} from 'react';
import API from '../utils/API';
import '../components/UserDashboard/UserDashboard.css';

import TotalsDashboard from "../components/UserDashboard/TotalsDashboard";
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

    goToAddMealsPage = () => {
        this.props.history.push("/user/addMeal");
    }

    render() {

        return (
            <div>
                <div>
                    <TotalsDashboard/>
                    <MealDashboard/>
                </div>
                <div>
                    <button onClick = {this.goToAddMealsPage} className="btn btn-large add-button" type="button" name="action">+ Add Food or Water</button>
                </div>
            </div>
        );
    }
}

export default UserDashboard;
