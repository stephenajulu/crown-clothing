import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  signingIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        signingIn: true
      }

    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        signingIn: false
      }
    
    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
    case userActionTypes.EMAIL_SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
        signingIn: false
      }

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }

    default:
      return state;
  }
}

export default userReducer;