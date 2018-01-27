import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Row, Col } from 'react-materialize';
import '../styles/userNotesPage.css';


class UserNotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Log your mood, symptom, and other relevant notes. '
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A note was posted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <Row>
                <div className='col s9 offset-s2'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        <div>
                            <Col s={8} className="notes">Notes</Col>
                            <Col s={2} className="date"><Moment>Current Date: {} </Moment></Col>
                        </div>
                        <textarea className="textarea" placeholder={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </Row>
        </div>
        );
    }
}

export default UserNotesPage;