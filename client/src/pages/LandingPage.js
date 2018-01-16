import React from 'react';
import { Row, Input } from 'react-materialize';


const LandingPage = () => (
    // Grid sizing needs tweeking 
    <div className='container LoginForm' >
        <Row >
            <div className='col s6 offset-s3'> 
            <form >
            <h5>Login</h5>
            <Input placeholder="Placeholder" s={12} label="First Name" />
            <Input s={12} label="Last Name" />
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" s={12} />
            <div className="row">
                <div className="col s12">
                    <p className="center-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Login</button></p>
                    {/* <br/>  */}
                    <p className="center-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Sign Up Now</button></p>
                </div>
            </div>
            </form>
            </div>
        </Row>       
    </div>
);

export default LandingPage;