import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    
    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
    case userActionTypes.EMAIL_SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
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