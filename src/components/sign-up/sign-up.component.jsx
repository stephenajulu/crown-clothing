import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignUpStart } from '../../redux/user/user.action';

import { SignUpContainer, Alert } from './sign-up.styles';

import { selectIsSigningUp } from '../../redux/user/user.selectors';

const SignUp = ({ emailSignUpStart, isSigningUp }) => {
  const [ credentials, setCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [ noPasswordMatch, setNoPasswordMatch ] = useState(false);
  
  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNoPasswordMatch(true);
      return;
    }
    emailSignUpStart(email, password, displayName);
  }

  const handleChange = e => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <SignUpContainer>
      <h2 className='title'> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {
        noPasswordMatch ? (
      <Alert>Passwords do not match!</Alert>
        ) : null
      }
      <form
        onSubmit={handleSubmit}
        className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required />

        <FormInput
          type='text'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required />

        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required />


        <CustomButton type='submit' loading={isSigningUp ? 'true' : 'false'}>{isSigningUp ? null : 'SIGN UP'}</CustomButton>

      </form>

    </SignUpContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isSigningUp: selectIsSigningUp
});

const mapDispatchToProps = dispatch => ({
  emailSignUpStart: (email, password, displayName) => dispatch(emailSignUpStart({ email, password, displayName }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);