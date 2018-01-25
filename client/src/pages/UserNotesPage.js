import React, { Component } from 'react';
import { Collection, CollectionItem, Row } from 'react-materialize';


class UserNotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Log your mood, symptom, and other relevant. '
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
           <form onSubmit={this.handleSubmit}>
            <label>
                <h2>Notes</h2>
        <textarea placeholder={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}

export default UserNotesPage;