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
            // .then({breakfast: this.state.totalMeals.filter((meal) => {return meal.meal === "Breakfast"})})
            .catch(err => console.log(err));
    }

    loadWaters() {
        API
            .getWaters()
            .then(res => this.setState({totalWaters: res.data, water: ''}))
            .catch(err => console.log(err));
    }

    TotalDailyWater = () => {
        return (this.state.totalWaters || []).reduce((sum, water) => {

            return sum += water.water;
        }, 0)
    }


    filterMeal = (target = '') => {
        return (this.state.totalMeals || []).reduce((result, meal) => {
            if (meal.meal.toLowerCase() === target.toLowerCase()) {
                return {
                    calcium: result.calcium + meal.calcium,
                    iron: result.iron + meal.iron,
                    calories: result.calories + meal.calories,
                    protein: result.protein + meal.protein,
                }
            }
            return result;
        }, { calcium: 0, iron: 0, calories: 0, protein: 0 })
    };


     render() {
        const breakfast = this.filterMeal('breakfast');
        const lunch = this.filterMeal('lunch');
        const dinner = this.filterMeal('dinner');
        const snack = this.filterMeal('snack');


         return (
            <div className="meal-container">

                <Row>
                    <Col s={12}>

                        <div className='meal-card'>

                            <div className='meal-totals'>

                                <div className="water">
                                   <div className="header">
                                     <h5>Water</h5>
                                   </div>
                                    <div className="meal-nutrients">
                                        <p>{`${this.TotalDailyWater()} ounces`}</p>
                                    </div>
                                </div>

                                <div className="meal">
                                    <div className="header">
                                        <h5>Breakfast</h5>
                                    </div>
                                    <div className="meal-nutrients">
                                        <p>{`Calories: ${breakfast.calories}`}</p>
                                        <p>{`Calcium: ${breakfast.calcium} mg`}</p>
                                        <p>{`Protein: ${breakfast.protein} g`}</p>
                                        <p>{`Iron: ${breakfast.iron} mg`}</p>
                                    </div>
                                </div>

                                <div className="meal">
                                    <div className="header">
                                        <h5>Lunch</h5>
                                    </div>
                                    <div className="meal-nutrients">
                                        <p>{`Calories: ${lunch.calories}`}</p>
                                        <p>{`Calcium: ${lunch.calcium} mg`}</p>
                                        <p>{`Protein: ${lunch.protein} g`}</p>
                                        <p>{`Iron: ${lunch.iron} mg`}</p>
                                    </div>
                                </div>

                                <div className="meal">
                                    <div className="header">
                                        <h5>Dinner</h5>
                                    </div>
                                    <div className="meal-nutrients">
                                        <p>{`Calories: ${dinner.calories}`}</p>
                                        <p>{`Calcium: ${dinner.calcium} mg`}</p>
                                        <p>{`Protein: ${dinner.protein} g`}</p>
                                        <p>{`Iron: ${dinner.iron} mg`}</p>
                                    </div>
                                </div>

                                <div className="meal">
                                    <div className="header">
                                        <h5>Snacks</h5>
                                    </div>
                                    <div className="meal-nutrients">
                                        <p>{`Calories: ${snack.calories}`}</p>
                                        <p>{`Calcium: ${snack.calcium} mg`}</p>
                                        <p>{`Protein: ${snack.protein} g`}</p>
                                        <p>{`Iron: ${snack.iron} mg`}</p>
                                    </div>
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
