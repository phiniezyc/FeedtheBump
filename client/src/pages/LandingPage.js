import React, { Component } from 'react';
import Auth from '../utils/Auth.js';

const auth = new Auth();

class LandingPage extends Component {
    sign_user = () => {
        auth.login();
    };

    render() {
        return (
            // Grid sizing needs tweeking

            <div className='col s6 offset-s3'>
                <div>
                    <h1>Welcome to Feed the Bump</h1>

                    <button onClick = {this.sign_user} className="btn btn-large waves-effect waves-light" type="button" name="action">Click to sign in</button>
                </div>
            </div>

        );
    }
}

export default LandingPage;