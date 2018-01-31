import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './UserDashboard.css';
import API from '../../utils/API';

class WaterDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalWaters: []
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
    //
    // }

    render() {
        console.log(this.state.totalWaters);

        return (
            <div className="water-container">
                <Row>
                    <Col s={12}>

                        <div className='water-card'>

                            <div className='water-totals'>
                                <div className="water-heading">
                                    <h5>Water</h5>
                                </div>

                                <div className="water">

                                    <p>{`${this.TotalDailyWater()} oz.`}</p>
                                </div>



                            </div>

                        </div>

                    </Col>
                </Row>
            </div>
        )}}


export default WaterDashboard;
