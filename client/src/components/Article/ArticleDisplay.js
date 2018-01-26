import React from 'react';
import axios from 'axios';
import { Row } from 'react-materialize';



export default class ArticleDisplay extends React.Component {

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
        let topicLinks = [];

        try {
            topics = this.state.results.Result.Topics
        }catch(err){
            console.log("Loading...");
        }

        try {
            topicLinks = this.state.results.Result.Topics.AccessibleVersion
        }catch(err){
            console.log("Loading...");
        }


        let tools = [];
        try {
            tools = this.state.results.Result.Tools
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
                                    <a href="https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/get-enough-folic-acid"> <p key = {index}> {el.Title} </p></a>
                                ))
                            }
                        </div>
                    </div>
                </Row>
                <div>
                    {
                        tools.map((el, index) => (
                            <p key = {index}> {el.Title} </p>
                        ))
                    }                </div>
            </div>
        );
    }
}

