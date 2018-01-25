import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import moment from 'moment';
import '../styles/userSettings.css';
import 'react-day-picker/lib/style.css';


import DatePicker from '../components/DatePicker/DatePicker';
import state from '../components/DatePicker/DatePicker';


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
            //depending on how many days, add xxx calories to their calorie entry
        event.preventDefault();

        console.log("A date was submitted");

        //calculate days until due date
    //======= how do I get the selected date from DatePicker into this page in order
    //======= use it in a the below calculation?==============
        const daysRemaining = (state) => {
            const date = moment(state);
            const todaysdate = moment();

            return date.diff(todaysdate, 'days');
        };

        const result = daysRemaining(state);
            console.log(result);
        //
        // };


    }

    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>
                    <h4>Settings</h4>
                        <p className="question-heading">Typical Calorie Intake (before pregnancy):</p>
                    <Input placeholder="Calories" s={6} name="calories" onChange={this.handleChange} />
                    </div>
                </Row>
                <Row>
                    <div className='col s8 offset-s2'>
                    <p className="question-heading">Due Date:</p>
                    <DatePicker/>
                        <button className="btn btn-small waves-effect waves-light" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                    </div>
                 </Row>
            </div>
        );
    }
}

export default UserSettings;