import React, {Component} from 'react';
import {Row} from 'react-materialize';
import '../styles/userNotesPage.css';

class UserNotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Log your mood, symptom, and other relevant notes. '
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A note was posted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <div className="notes-date">
                                    <h2 className="notes-date">Notes</h2>
                                    {/* goal is to have the current date shown. */}
                                    <h2 className="notes-date">Current Date</h2>
                                </div>
                                <textarea placeholder={this.state.value} onChange={this.handleChange}/>
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default UserNotesPage;