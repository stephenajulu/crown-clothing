import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { userActionTypes } from './user.types';

import { signInSuccess, signInFail, emailSignUpSuccess, emailSignUpFail } from './user.action';


export function* getSnapShotFromAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapShot = yield userRef.get();
    yield put(signInSuccess({
      id: snapShot.id,
      ...snapShot.data()
    }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

// GOOGLE SIGN-IN
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromAuth(user);
  } catch(error) {
    yield put(signInFail(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// EMAIL SIGN-IN
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromAuth(user);
    yield put(emailSignUpSuccess(user));
  } catch (error) {
    yield put(emailSignUpFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// EMAIL SIGN-UP
export function* signUpWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, { displayName });
    yield put(emailSignUpSuccess(user));
  } catch (error) {
    console.error(error);
    yield put(emailSignUpFail(error));
  }
}

export function* onEmailSignUpStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

// TO ROOT SAGA
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onEmailSignUpStart)
  ]);
}