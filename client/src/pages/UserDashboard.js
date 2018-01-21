import React, { Component } from 'react';
import { Collection, CollectionItem, Row} from 'react-materialize';

class UserDashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <div className='col s8 offset-s2'>
                    <Collection header='Daily Diary'>
                        <CollectionItem href='#'>Breakfast</CollectionItem>
                        <CollectionItem href='#'>Lunch</CollectionItem>
                        <CollectionItem href='#'>Dinner</CollectionItem>
                        <CollectionItem href='#'>Snacks</CollectionItem>
                        <CollectionItem href='#'>Water</CollectionItem>
                    </Collection>
                    <p class="left-align"><button class="btn btn-small waves-effect waves-light" type="button" name="action"> + Add</button></p>
                    {/* We should change this button to either the "+" OR a picture button  */}
                    </div>
                </Row>
            </div>
        );
    }
}

export default UserDashboard;

// This is where we, Brelon Buckner, will log the information that the users search for/Log!!
// /UserDashboard.js