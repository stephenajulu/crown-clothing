import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollectionItems = createSelector(
  [selectShop],
  items => items.shopItems
);

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopCollectionItems],
    collections => collections[collectionUrlParam]
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollectionItems],
  collections => Object.keys(collections).map(key => collections[key])
);