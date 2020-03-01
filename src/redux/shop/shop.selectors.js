import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollectionItems = createSelector(
  [selectShop],
  items => items.collections
);

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopCollectionItems],
    collections => 
      collections ? collections[collectionUrlParam] : null
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollectionItems],
  collections => 
    collections ? Object.values(collections) : []
);