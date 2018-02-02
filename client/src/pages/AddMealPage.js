import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import API from '../utils/API';
import NutritionixResultsDisplay from '../components/NutritionixResultsDisplay/NutrionixReultsDisplay';
import SearchComponent from '../components/SearchComponent/SearchComponent';
import '../styles/AddMealPage.css';
class AddMealPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalMeals: [],
            totalWaters: [],
            nutritionixResults: {},
            food: 'No food entered',
            calories: 'No calories entered',
            protein: 'no protein submitted',
            calcium: 'no calcium submitted',
            iron: 'no iron submitted',
            meal: 'No meal type entered',
            water: 'no water submitted'
        };

        this.handleFoodSubmit = this
            .handleFoodSubmit
            .bind(this);

        this.handleWaterSubmit = this
            .handleWaterSubmit
            .bind(this);
    }

    componentDidMount() {
        this.loadMeals();
        this.loadWaters();

    }

    loadMeals() {
        API
            .getMeals()
            .then(res => this.setState({
                totalMeals: res.data,
                food: '',
                calories: '',
                protein: '',
                calcium: '',
                iron: '',
                meal: '',
                date: ''
            }))
            .catch(err => console.log(err));

    }

    loadWaters() {
        API
            .getWaters()
            .then(res => this.setState({totalWaters: res.data, water: ''}))
            .catch(err => console.log(err));

    }

    handleFoodSubmit() {
        if (this.state.food && this.state.calories && this.state.meal) {
            API
                .saveMeal({
                    food: this.state.food,
                    calories: this.state.calories,
                    protein: this.state.protein,
                    calcium: this.state.calcium,
                    iron: this.state.iron,
                    meal: this.state.meal
                })
                .then(res => this.loadMeals())
                .catch(err => console.log(err));
        }
    }

    handleWaterSubmit() {
        if (this.state.water) {
            API
                .saveWater({water: this.state.water})
                .then(res => this.loadWaters())
                .catch(err => console.log(err));
        }
    }

    goToDashboardPage = () => {
        this.props.history.push('/user/dashboard');
    }



    render() {
        // console.log(this.state.totalMeals);
        // console.log(this.state.totalWaters);

        return (
            <div className='flex-container'>
                <div className='food-water'>
                    <div className='addfood-form'>
                        <h4>Add Food</h4>
                        <form>
                            <div className='add-nutrients'>
                                <Input
                                    onChange={event => this.setState({food: event.target.value})}
                                    placeholder='Food'/>

                                <Input
                                    onChange={event => this.setState({calories: event.target.value})}
                                    placeholder='Calories'/>

                                <Input
                                    onChange={event => this.setState({protein: event.target.value})}
                                    placeholder='Protein (in grams)'/>

                                <Input
                                    onChange={event => this.setState({calcium: event.target.value})}
                                    placeholder='Calcium (% daily value)'/>

                                <Input
                                    onChange={event => this.setState({iron: event.target.value})}
                                    placeholder='Iron (% daily value)'/>
                            </div>
                            <div className='add-meal'>
                                <div className='meal-input'>
                                <Input
                                    onChange={event => this.setState({meal: event.target.value})}
                                    name='group1'
                                    type='radio'
                                    value='Breakfast'
                                    label='Breakfast'/>
                                </div>

                                <div className='meal-input'>
                                <Input
                                    onChange={event => this.setState({meal: event.target.value})}
                                    name='group1'
                                    type='radio'
                                    value='Lunch'
                                    label='Lunch'/>
                                </div>

                                <div className='meal-input'>
                                <Input
                                    onChange={event => this.setState({meal: event.target.value})}
                                    name='group1'
                                    type='radio'
                                    value='Dinner'
                                    label='Dinner'/>
                                </div>

                                <div className='meal-input'>
                                <Input
                                    onChange={event => this.setState({meal: event.target.value})}
                                    name='group1'
                                    type='radio'
                                    value='Snack'
                                    label='Snack'/>
                                </div>

                                <div className='meal-input'>
                                    <Button
                                        onClick={this.handleFoodSubmit}
                                        className='btn btn-small add'
                                        icon='add'
                                        type='submit'
                                        name='action'>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='search-food'>
                        <SearchComponent.SearchBar updateResults={(data) => {
                            this.setState({nutritionixResults: data})
                        }}/>
                    </div>

                    <div className='add-water'>
                        <form>
                            <h5>Add Water</h5>

                            <div className='water-functions'>
                                <div className='water-input>'>
                                    <Input onChange={event => this.setState({water: event.target.value})}
                                        type='text' id='search' name='search' placeholder='Water (in ounces)'/>
                                </div>

                                <div className='water-button'>
                                    <Button
                                        onClick={this.handleWaterSubmit}
                                        className='btn btn-small add'
                                        icon='add'
                                        type='button'
                                        name='submit'>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className='card-div'>
                        <div>
                            <NutritionixResultsDisplay nutritionixResults={this.state.nutritionixResults}/>
                            <div>
                                <button onClick={this.goToDashboardPage} type='button'>View Dashboard</button>
                            </div>
                        </div>

                </div>

                {/*<div className='card'>*/}
                    {/*{(hits || []).map((result, i) => (*/}
                        {/*<div>*/}
                            {/*<div key={i} className='card-content'>*/}
                                {/*<span className='card-title'>${result.fields.item_name}</span>*/}
                                {/*<p>{`Brand Name: ${result.fields.brand_name}`}</p>*/}
                            {/*</div>*/}
                            {/*<div className="card-reveal">*/}
                                {/*<span className='card-title'>${result.fields.item_name}</span>*/}
                                {/*<p>{`Calories: ${result.fields.nf_calories}`}</p>*/}
                                {/*<p>{`Protein: ${result.fields.nf_protein}`}</p>*/}
                                {/*<p>{`Calcium: ${result.fields.nf_calcium_dv}`}</p>*/}
                                {/*<p>{`Iron: ${result.fields.nf_iron_dv}`}</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*))}*/}
                {/*</div>*/}


            </div>

        );
    }
}

export default AddMealPage;
