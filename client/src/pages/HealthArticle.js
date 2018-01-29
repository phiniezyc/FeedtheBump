import React, { Component } from 'react';
import axios from 'axios';
import { Row } from 'react-materialize';

import ArticleDisplay from '../components/Article/ArticleDisplay';

//once the API is working, and we see how the articles are delivered, we'll need to adapt layout.
class HealthArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            results:{}
            };
        }

        componentDidMount() {


        axios.get('https://healthfinder.gov/FreeContent/developer/Search.json?api_key=rlaulqdetivhvqxo&keyword=pregnancy')
            .then(res => {
                console.log(res);
                this.setState({results: res.data});

            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });

        }


    render() {
        let topics = [];
        try {
            topics = this.state.results.Result.Topics
        }catch(err){
            console.log("Loading...");
        }
        return (
            <div>

                <Row>
                    <div className='articles'>
                        <div id="health-info">
                            {
                                topics.map((el, index) => (
                                    <h4 key = {index}> {el.Title} </h4>
                                ))
                            }
                        </div>
                    </div>
                </Row>
                <div>
                    <h1>{this.state.articles}</h1>
                </div>
                <div>
                    <ArticleDisplay/>
                </div>
            </div>
        );
    }
}

export default HealthArticle;