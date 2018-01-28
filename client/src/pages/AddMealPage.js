import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';
import API from '../utils/API';
import NutritionixResultsDisplay from '../components/NutritionixResultsDisplay/NutrionixReultsDisplay';
import SearchComponent from '../components/SearchComponent/SearchComponent';

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
      water: 'no water submitted',
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
    this.loadNutritionixResults();
    
  }

  loadMeals() {
    API
      .getMeals()
      .then(res => this.setState({totalMeals: res.data, food: '', calories: '', protein: '', calcium: '', iron: '', meal: '', date: ''}))
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

  handleFoodSubmit() {
    // const data = this.state; console.log(data);
    if (this.state.food && this.state.calories && this.state.meal) {
      API
        .saveMeal({food: this.state.food, calories: this.state.calories, protein: this.state.protein, calcium: this.state.calcium, iron: this.state.iron, meal: this.state.meal})
        .then(res => this.loadMeals())
        .catch(err => console.log(err));
    }
  }

  handleWaterSubmit() {
    // const waterData = this.state.water; console.log(waterData);

    if (this.state.water) {
      API.saveWater({water: this.state.water})
      //   .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  }

  loadNutritionixResults = () => {
    API
      .getNutritionixResults()
      .then(res => this.setState({nutritionixResults: res.data})) //this is an object so had to convert to a string instead. Is this right?
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.totalMeals);
    console.log(this.state.totalWaters);
    // console.log(`Nutritionix Data:${this.state.nutritionixResults}`);
    return (
      <div>
        <div>
          <SearchComponent.SearchBar/>
        </div>
        <Row>
          <div className="col s6 ">
            <form >
              <h5>Add Food</h5>

              <Input
                onChange={event => this.setState({food: event.target.value})}
                s={12}
                label="Add Food"
                placeholder="Food"/>
              <Input
                onChange={event => this.setState({calories: event.target.value})}
                s={12}
                label="Add Calories"
                placeholder="Calories"/>
                <Input
                onChange={event => this.setState({protein: event.target.value})}
                s={12}
                label="Add Protein"
                placeholder="Protein"/>
                <Input
                onChange={event => this.setState({calcium: event.target.value})}
                s={12}
                label="Add Calcium"
                placeholder="Calcium"/>
                <Input
                onChange={event => this.setState({iron: event.target.value})}
                s={12}
                label="Add Iron"
                placeholder="Iron"/>


              <Input
                onChange={event => this.setState({meal: event.target.value})}
                name="group1"
                type="radio"
                value="Breakfast"
                label="Breakfast"/>
              <Input
                onChange={event => this.setState({meal: event.target.value})}
                name="group1"
                type="radio"
                value="Lunch"
                label="Lunch"/>
              <Input
                onChange={event => this.setState({meal: event.target.value})}
                name="group1"
                type="radio"
                value="Dinner"
                label="Dinner"/>
              <Input
                onChange={event => this.setState({meal: event.target.value})}
                name="group1"
                type="radio"
                value="Snack"
                label="Snack"/>
              <div className="col s4">
                <button
                  onClick={this.handleFoodSubmit}
                  className="btn btn-small waves-effect waves-light"
                  type="submit"
                  name="action">ADD
                </button>
              </div>
            </form>
          </div>
          <div className="col s4 offset-s2">
            <form>
              <h5>Add Water</h5>
              <Input
                onChange={event => this.setState({water: event.target.value})}
                placeholder="Water"
                s={12}
                label="Add Water"/>
              <div className="col s4">
                <p className="right-align">
                  <button
                    onClick={this.handleWaterSubmit}
                    className="btn btn-small waves-effect waves-light"
                    type="button"
                    name="submit">Add
                  </button>
                </p>
              </div>
            </form>
          </div>
          {/* <div className='meals'>
            {this.state.totalMeals.map((meal, i) =>{

                return (
                  <div key={i}>
                  <li key={meal.food}>{meal.food}</li>
                  <li key={meal.calories}>{meal.calories}</li>
                  <li key={meal.meal}>{meal.meal}</li>
                  <li key={meal.date}>{meal.date}</li>
                  </div>
                )
              })}
          </div> */}
          
        </Row>
       
        <div>
            <NutritionixResultsDisplay nutritionixResults={this.state.nutritionixResults}/>
        </div>
        
      </div>
    );
  }
}

export default AddMealPage;
