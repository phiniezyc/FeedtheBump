import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

import Meal from '../Widgets/Meal';

// Default styles.
import 'react-dazzle/lib/style/style.css';

class MealDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widgets: {
                Meal: {
                    type: Meal,
                    title: 'Breakfast',
                }
            },
            layout: {
                rows: [{
                    columns: [{
                        className: 'col s6 offset-s2',
                        widgets: [{key: 'Meal'}],
                    }],
                }],
            }
        };
    }

    render() {
        return <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
    }
}

export default MealDashboard;