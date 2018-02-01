import React from 'react';
import { Row, Col } from 'react-materialize';
import './Article.css';

export default class ArticleDisplay extends React.Component {

    //hard code links

    render() {

        return (
            <div>
                <Row>
                    <Col s={12}>
                        <div className='articles'>

                            <div className="topics">
                                <h4>Topics</h4>

                                <div className="article">

                                    <div className="image"><img src="https://healthfinder.gov/HealthTopics/glmedia/icons/getenoughfolicacid.jpg" alt="Get Enough Folic Acid"></img></div>
                                    <div className="description">
                                        <h6><a href="https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/get-enough-folic-acid">
                                            Get Enough Folic Acid</a></h6>
                                        <p>Women of childbearing age need an extra 400 micrograms (mcg) of folic acid each day. Folic acid is a vitamin that can help prevent birth defects.</p>
                                    </div>
                                    <div className="related">
                                        <h6>Related</h6>
                                        <p><a href="https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/diabetes/eat-healthy">
                                            Eat Healthy</a></p>
                                        <p><a href="https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/get-enough-calcium">
                                            Get Enough Calcium</a></p>
                                        <p><a href="https://healthfinder.gov/HealthTopics/Category/pregnancy/nutrition-and-physical-activity/eat-healthy-during-pregnancy-quick-tips">
                                            Eat Healthy During Pregnancy: Quick Tips</a></p>
                                        <p><a href="https://healthfinder.gov/HealthTopics/Category/pregnancy/doctor-and-midwife-visits/have-a-healthy-pregnancy">
                                            Have a Healthy Pregnancy</a></p>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col s={12}>
                            <div className="tools">

                            </div>

                    </Col>
                </Row>

            </div>
        );
    }
}

