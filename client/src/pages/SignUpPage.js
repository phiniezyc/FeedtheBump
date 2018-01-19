import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class SignUpPage extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='container SignUpForm' >
                <Row >
                    <div className='col s6 offset-s3'>
                        <form >
                            <h5>Sign Up</h5>
                            <Input s={12} label="First Name" />
                            <Input s={12} label="Last Name" />
                            <Input type="password" label="Password" s={12} />
                            <Input type="email" label="Email" s={12} />
                            <div className="row">
                                <div className="col s12">
                                    {/* <br/>  */}
                                    <p className="center-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action" value="Submit">Sign Up Now</button></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}
export default SignUpPage;