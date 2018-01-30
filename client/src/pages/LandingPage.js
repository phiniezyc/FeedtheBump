import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import Auth from '../utils/Auth.js';
import '../styles/Main.css';
import '../styles/LandingPage.css';




const auth = new Auth();

class LandingPage extends Component {
    sign_user = () => {
        auth.login();
    };

    render() {
        return (
            // Grid sizing needs tweeking

            <div className='col s6 offset-s3'>
                <div className="banner">
                    <Slider className="fullscreen">
                        <Slide className="caption center-align" src="https://static.pexels.com/photos/616412/pexels-photo-616412.jpeg">
                            <div className="center-align">
                                <h1>Feed the Bump</h1>
                                <p>Your healthy guide to eating for two.</p>
                                <button onClick = {this.sign_user} className="btn btn-large ftb-button" type="button" name="action">Sign In</button>
                            </div>
                        </Slide>
                    </Slider>


                    </div>
            </div>

        );
    }
}

export default LandingPage;