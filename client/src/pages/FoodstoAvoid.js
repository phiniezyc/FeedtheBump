import React, {Component} from 'react';
import {Row, Col, Icon} from 'react-materialize';
import '../styles/NutritionGuide.css';

class FoodstoAvoid extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>

                        <div className='static'>
                            <h4>Foods to Avoid</h4>
                            <h6>Seafood:</h6>
                            <ul>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>High-mercury fish (shark, swordfish, king mackerel, tilefish)</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Raw fish</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>More than 1 serving per week of canned albacore</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Refrigerated, smoked seafood</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Raw shellfish</span>
                                </li>
                            </ul>

                            <h6>Meat:</h6>
                            <ul>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Processed meat/deli meat (unless heated until steaming)
                                    </span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Raw meat</span>
                                </li>
                            </ul>

                            <h6>Eggs:</h6>
                            <ul>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Raw or undercooked eggs</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Cookie dough or cake batter containing raw eggs</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Desserts and sauces containing raw eggs</span>
                                </li>
                            </ul>

                            <h6>Unpasteurized Soft Cheeses:</h6>
                            <ul>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Brie</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Camembert</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Roquefort</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Feta</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Gorgonzola</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Queso blanco and queso fresco</span>
                                </li>
                            </ul>

                            <h6>Other:</h6>
                            <ul>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Prepared salads from the deli</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Buffet food that has been sitting out more than two hours</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Unwashed produce or raw sprouts</span>
                                </li>
                                <li>
                                    <Icon tiny>clear</Icon>
                                    <span>Unpasteurized fruit juice</span>
                                </li>
                            </ul>

                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default FoodstoAvoid;