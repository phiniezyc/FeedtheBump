import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DaysRemaining extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }
    handleSubmit(day) {
        this.setState({ selectedDay: day });
    }
    render() {
        return (
            <div>
                <DaysRemaining
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                />
                {this.state.selectedDay ? (
                    <p>You are {this.state.selectedDay.toLocaleDateString()} days along.</p>
                ) : (
                )}
            </div>
        );
    }
}