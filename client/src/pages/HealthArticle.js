import React, { Component } from 'react';
import API from '../utils/API';
import { Row } from 'react-materialize';

//once the API is working, and we see how the articles are delivered, we'll need to adapt layout.
class HealthArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
            };
        }

        componentDidMount() {
            this.loadArticles();
        }

            loadArticles() {
                API.getArticles()
                    .then(res =>
                        this.setState({
                            articles: res.data,
                        }))
                    .catch(err => console.log(err));
                console.log(this.state.articles);
            }

        // axios.get('https://healthfinder.gov/FreeContent/developer/Search.json?api_key=rlaulqdetivhvqxo&keyword=pregnancy')
        //     .then(res => {
        //         console.log(res);
        //         // console.log(res.data.map(topic) =>
        //
        //
        //         // );


        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);
        //     });
        //
        // }


    render() {

        return (
            <div>
                <Row>
                    <div className='col s12'>
                        <h2>Today's Article</h2>
                        <div id="health-info"></div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default HealthArticle;