import React from 'react';
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import { CheckoutItemContainer, ImageContainer, Name, 
         Quantity, Price, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className='arrow' onClick={() => 
          dispatch(removeItem(cartItem))}>&#10094;</div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => 
          dispatch(addItem(cartItem))}>&#10095;</div>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButtonContainer onClick={() =>
        dispatch(clearItemFromCart(cartItem))}>&#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
};

export default connect(null)(CheckoutItem);