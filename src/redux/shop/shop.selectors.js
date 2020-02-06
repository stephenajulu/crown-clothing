import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectShopCollectionItems = createSelector(
  [selectShop],
  items => items.shopItems
);

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopCollectionItems],
    collections => collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);