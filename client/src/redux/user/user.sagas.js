import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

import { userActionTypes } from './user.types';

import { signInSuccess, signInFail, 
        emailSignUpSuccess, emailSignUpFail, 
        signOutSuccess, signOutFail } from './user.action';

// REUSABLE UTIL
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
  } catch(error) {
    yield put(signInFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// EMAIL SIGN-UP
export function* signUpWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user, { displayName });
    const snapShot = yield userRef.get();
    yield put(emailSignUpSuccess({
      id: snapShot.id,
      ...snapShot.data()
    }));
  } catch (error) {
    console.error(error);
    yield put(emailSignUpFail(error));
  }
}

export function* onEmailSignUpStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

// CHECKING USER SESSION
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return; // user never signed in before
    yield getSnapShotFromAuth(userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// SIGN OUT
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch(error) {
    yield put(signOutFail(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

// TO ROOT SAGA LISTENER CHAIN
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
}