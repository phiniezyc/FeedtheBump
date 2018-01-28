import React, { Component } from 'react';
import { Row, Col, Table } from 'react-materialize';
import '../styles/userNutritionReport.css';

class UserNutritionReport extends Component {
    render() {
        return (
            <div>
                <Row>
                    <form>
                    <div className='col s9 offset-s2'>
                        <Col s={8} className="nutrition-report">Nutrition Report</Col>
                        <Col s={2} className="current-date">Current Date: </Col>
                        
                            <Table>
                                <thead>
                                    <tr>
                                        <th meals-field="id">Meals/Water Intake</th>
                                        <th goals-field="id">Goals</th>
                                        <th calories-field="name">Calories</th>
                                        <th protein-field="price">Protein</th>
                                        <th iron-field="price">Iron</th>
                                        <th folate-field="price">Folate</th>
                                        <th calcium-field="price">Calcium</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Breakfast</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Lunch</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Dinner</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Snacks</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Water</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                    </form>
                </Row>
            </div>
        );
    }
}

export default UserNutritionReport;