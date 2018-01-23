import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';
// import axios from "axios";
import API from "../utils/API";

class AddMealPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            food: "No food entered",
            calories: "No calories entered",
            meal: "No meal type entered"

        };

        this.handleFoodSubmit = this
            .handleFoodSubmit
            .bind(this);
    }

    handleFoodSubmit() {
        // const data = this.state;
        // console.log(data);
        if (this.state.food && this.state.calories && this.state.meal) {
            API.saveMeal({
                food: this.state.food,
                calories: this.state.calories,
                meal: this.state.meal
        
            })
            //   .then(res => this.loadBooks()) 
                .catch(err => console.log(err));
            }

        // fetch('/api/form-submit-url', {     method: 'POST',     body: data,     });
    }

    render() {
        return (
            <div>
                <Row >
                    <div className='col s6 '>
                        <form onSubmit={this.handleFoodSubmit}>
                            <h5>Add Food</h5>

                            <Input
                                onChange={event => this.setState({food: event.target.value})}
                                s={12}
                                label="Add Food"placeholder="Food"/>
                            <Input
                                onChange={event => this.setState({calories: event.target.value})}
                                s={12}
                                label="Add Calories"placeholder="Calories"/>

                            <Input
                                onChange={event => this.setState({meal: event.target.value})}
                                name='group1'
                                type='radio'
                                value='breakfast'
                                label='Breakfast'/>
                            <Input
                                onChange={event => this.setState({meal: event.target.value})}
                                name='group1'
                                type='radio'
                                value='lunch'
                                label='Lunch'/>
                            <Input
                                onChange={event => this.setState({meal: event.target.value})}
                                name='group1'
                                type='radio'
                                value='dinner'
                                label='Dinner'/>
                            <Input
                                onChange={event => this.setState({meal: event.target.value})}
                                name='group1'
                                type='radio'
                                value='snack'
                                label='Snack'/>
                            <div className="col s4">
                                <button onClick={this.handleFoodSubmit}
                                    className="btn btn-small waves-effect waves-light"
                                    type="submit"
                                    name="action">ADD</button>
                            </div>
                        </form>
                    </div>
                    <div className='col s4 offset-s2'>
                        <form>
                            <h5>Add Water</h5>
                            <Input placeholder="Water" s={12} label="Add Water"/>
                            <div className="col s4">
                                <p className="right-align">
                                    <button
                                        className="btn btn-small waves-effect waves-light"
                                        type="button"
                                        name="submit">Add</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default AddMealPage;