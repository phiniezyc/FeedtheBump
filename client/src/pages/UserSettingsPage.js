import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import '../styles/userSettings.css';
import 'react-day-picker/lib/style.css';


import DatePicker from '../components/DatePicker/DatePicker';

class UserSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //send to db
            //calculate days until due date
            //depending on how many days, add xxx calories to their calorie entry
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>
                    <h4>Settings</h4>
                        <p class="question-heading">Typical Calorie Intake (before pregnancy):</p>
                    <Input placeholder="Calories" s={6} name="calories" />
                    </div>
                </Row>
                <Row>
                    <div className='col s8 offset-s2'>
                    <p class="question-heading">Due Date:</p>
                    <DatePicker/>
                    <Input type="submit" value="Submit" />
                    </div>
                 </Row>
            </div>
        );
    }
}

export default UserSettings;