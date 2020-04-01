import { all, call, takeLatest, put } from 'redux-saga/effects';

import { userActionTypes } from '../user/user.types';
import { clearAllCartItems } from './cart.action';

export function* clearCartOnSignOut() {
  yield put(clearAllCartItems());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}