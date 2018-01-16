import React, { Component } from 'react';
import { Collection, CollectionItem, Row} from 'react-materialize';

//once the API is working, and we see how the articles are delivered, we'll need to adapt layout.
class HealthArticle extends Component {

    render() {
        return (
            <div>
                <Row>
                    <div className='col s12'>
                        <Collection header='main-article'>
                            <CollectionItem s={8} href='#'>Today's Article</CollectionItem>
                        </Collection>
                        <Collection header='other-articles'>
                            <CollectionItem s={4} href='#'>Previous Articles</CollectionItem>
                        </Collection>
                    </div>
                </Row>
            </div>
        );
    }
}

export default HealthArticle;