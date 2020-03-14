import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectErrorMessage = createSelector(
  [selectShop],
  shop => shop.errorMessage
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

export const selectShopCollectionItems = createSelector(
  [selectShop],
  shop => shop.collections
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