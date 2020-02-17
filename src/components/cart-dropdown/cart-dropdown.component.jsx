import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        !cartItems.length
        ? (
        <EmptyMessage>Your cart is empty</EmptyMessage>
        ) 
        : (
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        )
      }
    </CartItemsContainer>
    
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
      }}>
        GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps)(CartDropdown)
);