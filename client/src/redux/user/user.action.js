import { userActionTypes } from './user.types';

// CHECK USER SESSION
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

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

// EMAIL SIGN UP
export const emailSignUpStart = emailPasswordAndDisplayName => ({
  type: userActionTypes.EMAIL_SIGN_UP_START,
  payload: emailPasswordAndDisplayName
});

export const emailSignUpSuccess = user => ({
  type: userActionTypes.EMAIL_SIGN_UP_SUCCESS,
  payload: user
});

export const emailSignUpFail = error => ({
  type: userActionTypes.EMAIL_SIGN_UP_FAIL,
  payload: error
});

// SIGN OUT
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = error => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
  payload: error
});