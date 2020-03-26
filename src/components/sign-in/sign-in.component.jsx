import React from 'react';
import { connect } from 'react-redux';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import { googleSignInStart } from  '../../redux/user/user.action';

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
    const { googleSignInStart } = this.props;

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

          <ButtonsContainer>
            <CustomButton type='submit' value='Submit'> Sign in </CustomButton>
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
