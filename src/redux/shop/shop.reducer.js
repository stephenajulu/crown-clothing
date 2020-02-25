import SHOP_DATA from './shop.data';

import { shopActionTypes } from './shop.types'

const INITIAL_STATE = {
  shopItems: SHOP_DATA
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