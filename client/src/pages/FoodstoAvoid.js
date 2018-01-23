import React, { Component } from 'react';
import { Collection, CollectionItem, Row, Icon} from 'react-materialize';

class FoodstoAvoid extends Component {

    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>

                        <Collection header='Foods to Avoid'>
                            <CollectionItem>
                                <h5>Seafood:</h5>
                                <ul>
                                    <li><Icon tiny>clear</Icon><span>High-mercury fish (shark, swordfish, king mackerel, tilefish)</span></li>
                                    <li><Icon tiny>clear</Icon><span>Raw fish</span></li>
                                    <li><Icon tiny>clear</Icon><span>More than 1 serving per week of canned albacore</span></li>
                                    <li><Icon tiny>clear</Icon><span>Refrigerated, smoked seafood</span></li>
                                    <li><Icon tiny>clear</Icon><span>Raw shellfish</span></li>
                                </ul>
                            </CollectionItem>

                            <CollectionItem>
                                <h5>Meat:</h5>
                                    <ul>
                                        <li><Icon tiny>clear</Icon><span>Processed meat/deli meat (unless heated until steaming) </span></li>
                                        <li><Icon tiny>clear</Icon><span>Raw meat</span></li>
                                    </ul>
                            </CollectionItem>

                            <CollectionItem>
                                <h5>Eggs:</h5>
                                    <ul>
                                        <li><Icon tiny>clear</Icon><span>Raw or undercooked eggs</span></li>
                                        <li><Icon tiny>clear</Icon><span>Cookie dough or cake batter containing raw eggs</span></li>
                                        <li><Icon tiny>clear</Icon><span>Desserts and sauces containing raw eggs</span></li>
                                    </ul>
                            </CollectionItem>

                            <CollectionItem>
                                <h5>Unpasteurized Soft Cheeses:</h5>
                                   <ul>
                                        <li><Icon tiny>clear</Icon><span>Brie</span></li>
                                        <li><Icon tiny>clear</Icon><span>Camembert</span></li>
                                        <li><Icon tiny>clear</Icon><span>Roquefort</span></li>
                                        <li><Icon tiny>clear</Icon><span>Feta</span></li>
                                        <li><Icon tiny>clear</Icon><span>Gorgonzola</span></li>
                                        <li><Icon tiny>clear</Icon><span>Queso blanco and queso fresco</span></li>
                                   </ul>
                            </CollectionItem>

                            <CollectionItem>
                                <h5>Other:</h5>
                                    <ul>
                                        <li><Icon tiny>clear</Icon><span>Prepared salads from the deli</span></li>
                                        <li><Icon tiny>clear</Icon><span>Buffet food that has been sitting out more than two hours</span></li>
                                        <li><Icon tiny>clear</Icon><span>Unwashed produce or raw sprouts</span></li>
                                        <li><Icon tiny>clear</Icon><span>Unpasteurized fruit juice</span></li>
                                    </ul>
                            </CollectionItem>

                        </Collection>
                     
                    </div>
                </Row>
            </div>
        );
    }
}

export default FoodstoAvoid;