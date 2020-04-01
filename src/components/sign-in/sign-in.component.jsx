import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SignInContainer, ButtonsContainer, Alert } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from  '../../redux/user/user.action';
import { selectIsSigningIn, selectError } from '../../redux/user/user.selectors';

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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    const { googleSignInStart, isSigningIn, error } = this.props;

    return (
      <SignInContainer>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>
        {
          error ? <Alert>Invalid Email or Password</Alert>
          : null
        }
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
