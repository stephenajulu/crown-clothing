import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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

                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit'> Sign in </CustomButton>
                        <CustomButton 
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        > Sign in with google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
    
}

export default SignIn;
