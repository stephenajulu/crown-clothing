import { createSelector } from 'reselect';

// input selector
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsSigningIn = createSelector(
  [selectUser],
  user => user.signingIn
);

export const selectIsSigningUp = createSelector(
  [selectUser],
  user => user.signingUp
);

export const selectError = createSelector(
  [selectUser],
  user => user.error
);