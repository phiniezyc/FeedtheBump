import React, { Component } from 'react';

import ArticleDisplay from '../components/Article/ArticleDisplay';

//once the API is working, and we see how the articles are delivered, we'll need to adapt layout.
class HealthArticle extends Component {

    render() {

        return (
            <div>
                <div>
                    <ArticleDisplay/>
                </div>
            </div>
        );
    }
}

export default HealthArticle;