import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollectionItems = createSelector(
    [selectShop],
    items => items.shopItems
);