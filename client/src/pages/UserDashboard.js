import React, {Component} from 'react';
import API from '../utils/API';
import '../components/UserDashboard/UserDashboard.css';

import TotalsDashboard from "../components/UserDashboard/TotalsDashboard";
import MealDashboard from '../components/UserDashboard/MealDashboard';
// import WaterDashboard from '../components/UserDashboard/WaterDashboard';


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

    goToAddMealsPage = () => {
        this.props.history.push("/user/addMeal");
    }

    render() {

        return (
            <div>
                <TotalsDashboard/>
                <MealDashboard/>
                {/*<WaterDashboard/>*/}

            </div>
        );
    }
}

export default UserDashboard;
