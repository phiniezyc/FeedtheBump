import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';


class AddMealPage extends Component {
    render() {
        return (
            <div>
                <Row >
                    <div className='col s6 offset-s1'> 
                        <form >
                            <h5>Add Food</h5>
                            <Input placeholder="Placeholder" s={12} label="First Name" />
                                <div class="col s4">
                                    <p class="center-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Search</button></p>
                                </div>
                        </form>
                    </div>
                    <div className='col s5 '>
                        <form>
                            <h5>Add Water</h5>
                            <Input placeholder="Placeholder" s={12} label="First Name" />
                                <div class="col s4">
                                    <p class="center-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Add</button></p>
                                </div>
                        </form>
                    </div>
                </Row>  
            </div>
        );
    }
}



export default AddMealPage;