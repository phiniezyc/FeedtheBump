import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';
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
    this.props.history.push("/user/dashboard");
}

  

  render() {

    return (
      <div className='flex-container'>
          <Row>
              <Col s={9}>
                  <div className="addfood-div">
                      <form className="addfood-form">

                          <div className="add-nutrients">
                              <h4>Add Food</h4>

                              <Input
                              onChange={event => this.setState({food: event.target.value})}
                              s={12}
                              placeholder="Food"/>

                              <Input
                              onChange={event => this.setState({calories: event.target.value})}
                              s={12}
                              placeholder="Calories"/>

                              <Input
                              onChange={event => this.setState({protein: event.target.value})}
                              s={12}
                              placeholder="Protein"/>

                              <Input
                              onChange={event => this.setState({calcium: event.target.value})}
                              s={12}
                              placeholder="Calcium"/>

                              <Input
                              onChange={event => this.setState({iron: event.target.value})}
                              s={12}
                              placeholder="Iron"/>
                          </div>

                          <div className="add-extras">
                              <div className="add-meal">
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
                              </div>
                          </div>

                          <div className="add-buttondiv">
                              <button
                              onClick={this.handleFoodSubmit}
                              className="btn btn-small addfood-button"
                              type="submit"
                              name="action">ADD
                              </button>
                          </div>

                      </form>
                  </div>

                  <div className="search-food">
                        <SearchComponent.SearchBar updateResults={(data) => {
                            this.setState({nutritionixResults: data})
                        }}/>
                  </div>

                  <div className="add-water">
                      <form>
                          <h5>Add Water</h5>

                          <Input
                          onChange={event => this.setState({water: event.target.value})}
                          placeholder="Water"
                          s={12}
                          label="Add Water"/>

                          <div className="col s4">
                              <button
                              onClick={this.handleWaterSubmit}
                              className="btn btn-small waves-effect waves-light"
                              type="button"
                              name="submit">Add
                              </button>
                          </div>
                      </form>
                  </div>

             </Col>

             <Col s={3}>
                 <div className="cards">
                     <div className='NutritionixCardsDisplay'>
                         <NutritionixResultsDisplay nutritionixResults={this.state.nutritionixResults}/>
                     </div>
                 </div>
             </Col>

          </Row>
      </div>

    );
  }
}

export default AddMealPage;
