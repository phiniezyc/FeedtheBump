import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './UserDashboard.css';
import API from '../../utils/API';

class MealDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalMeals: [],
        };
    }

    componentDidMount() {
        this.loadMeals();
    }

    loadMeals() {
        API
            .getMeals()
            .then(res => this.setState({totalMeals: res.data, food: '', calories: '', meal: '', date: ''}))
            // .then({breakfast: this.state.totalMeals.filter((meal) => {return meal.meal === "Breakfast"})})
            .catch(err => console.log(err));
        // console.log(this.state.totalMeals);
    }

    filterBreakfast = () => {
        (this.state.totalMeals || []).filter((meal) => {

            return (meal.meal === "Breakfast");
        })

    }


     render() {
        console.log(this.state.totalMeals);
        console.log(this.filterBreakfast[0]);

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

                {/*<div className="test">*/}
                    {/*<ol>*/}
                        {/*{this*/}
                            {/*.filterBreakfast()*/}
                            {/*.map((meal, i) => {*/}


                                {/*return (*/}
                                    {/*<li key={i}>*/}
                                        {/*<div key={i}>*/}
                                            {/*<ol>*/}
                                                {/*<li key={meal.id}>{meal.meal}</li>*/}
                                                {/*<li key={meal.food}>{meal.food}</li>*/}
                                                {/*<li key={meal.calories}>{meal.calories}</li>*/}
                                                {/*<li key={meal.protein}>{meal.protein}</li>*/}
                                                {/*<li key={meal.calcium}>{meal.calcium}</li>*/}
                                                {/*<li key={meal.iron}>{meal.iron}</li>*/}
                                                {/*<li key={meal.date}>{meal.date}</li>*/}
                                            {/*</ol>*/}
                                        {/*</div>*/}
                                    {/*</li>*/}
                                {/*)*/}
                            {/*})}*/}
                    {/*</ol>*/}
                {/*</div>*/}
            </div>
        )}

}


export default MealDashboard;
