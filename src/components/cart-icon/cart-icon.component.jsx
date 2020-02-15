import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer>
      <ShoppingIcon />
    </ShoppingIconContainer>
    <ItemCount>{ itemCount }</ItemCount>
  </CartIconContainer>
);

const matchStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(matchStateToProps, mapDispatchToProps)(CartIcon);