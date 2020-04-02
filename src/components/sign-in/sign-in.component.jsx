import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SignInContainer, ButtonsContainer, Alert } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from  '../../redux/user/user.action';
import { selectIsSigningIn, selectError } from '../../redux/user/user.selectors';

const SignIn = ({ emailSignInStart, isSigningIn, error }) => {
  const [ credentials, setCredentials ] = useState({ email: '', password:'' });
  const { email, password } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  return (
      <SignInContainer>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>
        {
          error ? <Alert>Invalid Email or Password</Alert>
          : null
        }
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='email'
            value={email}
            label='Email'
            handleChange={handleChange}
            required />

          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            handleChange={handleChange}
            required />

          <ButtonsContainer>
            <CustomButton type='submit' value='Submit' loading={isSigningIn ? 'true': 'false'}> {isSigningIn ? null : 'Sign in'} </CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            > Sign in with google </CustomButton>
          </ButtonsContainer>

        </form>
      </SignInContainer>
  )

}

const mapStateToProps = createStructuredSelector({
  isSigningIn: selectIsSigningIn,
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
