import { userActionTypes } from './user.types';

// GOOGLE
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

// EMAIL
export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

// SUCCESS OR FAIL SIGN-IN
export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: userActionTypes.SIGN_IN_FAIL,
  payload: error
});