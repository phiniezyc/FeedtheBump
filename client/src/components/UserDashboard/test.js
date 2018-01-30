import React, { Component } from 'react';
import './UserDashboard.css';
import API from '../../utils/API';


class WaterTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalWaters: [],
            outline: true
        };
    }

    componentDidMount() {
        this.loadWaters();
    }

    loadWaters() {
        API
            .getWaters()
            .then(res => this.setState({totalWaters: res.data, water: ''}))
            .catch(err => console.log(err));
    }

    TotalDailyWater = () => {
        return (this.state.totalWaters || []).reduce((sum, water) => {

            return sum += water.water;
        }, 0)
    }

    //For each ounce added (as the number goes up by 1), the long outline div shortens
    // and a tiny, single filled-in div is added.

    // AddOunces = () => {
    //    const AddOunces = 'styled.outline'
    //
    // }

    render() {
        console.log(this.state.totalWaters);

        return (


export default WaterTest;