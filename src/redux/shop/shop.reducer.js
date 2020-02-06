import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  shopItems: SHOP_DATA
};

const shopCollectionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default shopCollectionReducer;