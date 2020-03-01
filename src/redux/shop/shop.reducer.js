import { shopActionTypes } from './shop.types'

const INITIAL_STATE = {
  shopItems: null
};

const shopCollectionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }

    default:
      return state;
  }
};

export default shopCollectionReducer;