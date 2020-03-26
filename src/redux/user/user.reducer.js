import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    
    case userActionTypes.EMAIL_SIGN_IN_FAIL:
    case userActionTypes.GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;