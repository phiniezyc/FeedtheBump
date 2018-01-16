import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';


class AddMealPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "search here for nutritional info",
            meal: "Input the meal type"

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
       
        const data = this.state;

        console.log(data);
        
        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        //     });
    }

    render() {
        return (
            <div>
                <Row >
                    <div className='col s6 '> 
                        <form onSubmit={this.handleSubmit}>
                            <h5>Add Food</h5>
                            {/* Putting these in to see results on page Delete after*/}
                            <h5>Search: {this.state.search}</h5>
                            <h5>Meal: {this.state.meal}</h5>
                            <Input onChange={event => this.setState({search: event.target.value})}placeholder="Search" s={12} label="Add Food" />

                            <Input onChange={event => this.setState({meal: event.target.value})} name='group1' type='radio' value='breakfast' label='Breakfast' />
                            <Input onChange={event => this.setState({meal: event.target.value})} name='group1' type='radio' value='lunch' label='Lunch' />
                            <Input onChange={event => this.setState({meal: event.target.value})} name='group1' type='radio' value='dinner' label='Dinner'  />
                            <Input onChange={event => this.setState({meal: event.target.value})} name='group1' type='radio' value='snack' label='Snack'  />
                            <div class="col s4">
                                <p class="left-align"><button class="btn btn-small waves-effect waves-light" type="submit" name="action">Search</button></p>
                            </div>
                        </form>
                    </div>
                    <div className='col s4 offset-s2'>
                        <form>
                            <h5>Add Water</h5>
                            <Input placeholder="Water" s={12} label="Add Water" />
                                <div class="col s4">
                                <p class="right-align"><button class="btn btn-small waves-effect waves-light" type="button" name="submit">Add</button></p>
                                </div>
                        </form>
                    </div>
                </Row>  
            </div>
        );
    }
}



export default AddMealPage;