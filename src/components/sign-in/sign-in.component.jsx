import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }


    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='email'
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required />

                    <FormInput
                    type='password' 
                    name='password' 
                    value={this.state.password}
                    label='password'
                    handleChange={this.handleChange}
                    required />

                    <CustomButton type='submit' value='Submit'> Sign in </CustomButton>
                </form>
            </div>
        )
    }
    
}

export default SignIn;
