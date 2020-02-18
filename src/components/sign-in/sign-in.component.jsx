import React from 'react';

import { SignInContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({
      email: '',
      password: ''
    });

    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <SignInContainer>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            label='Password'
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
      </SignInContainer>
    )
  }

}

export default SignIn;
