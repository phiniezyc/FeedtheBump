import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import '../styles/userSettings.css';
import 'react-day-picker/lib/style.css';


import DatePicker from '../components/DatePicker/DatePicker';

class UserSettingsPage extends Component {
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
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>
                    <h4>Settings</h4>
                        <p className="question-heading">Typical Calorie Intake (before pregnancy):</p>
                    <Input placeholder="Calories" s={6} name="calories" />
                    </div>
                </Row>
                <Row>
                    <div className='col s8 offset-s2'>
                    <p className="question-heading">Due Date:</p>
                    <DatePicker/>
                        <button className="btn btn-small waves-effect waves-light" type="submit" value="Submit">Submit</button>
                    </div>
                 </Row>
            </div>
        );
    }
}

export default UserSettingsPage;