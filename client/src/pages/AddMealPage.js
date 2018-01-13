import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';


class AddMealPage extends Component {
    render() {
        return (
            <div>
                <Row >
                    <div className='col s6 '> 
                        <form >
                            <h5>Add Food</h5>
                            <Input placeholder="Search" s={12} label="Add Food" />
                            <Input name='group1' type='radio' value='breakfast' label='Breakfast' />
                            <Input name='group1' type='radio' value='lunch' label='Lunch' />
                            <Input name='group1' type='radio' value='dinner' label='Dinner'  />
                            <Input name='group1' type='radio' value='snack' label='Snack'  />
                                <div class="col s4">
                                    <p class="left-align"><button class="btn btn-small waves-effect waves-light" type="button" name="action">Search</button></p>
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