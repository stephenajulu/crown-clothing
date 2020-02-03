import React from 'react';
import { connect } from 'react-redux'

import { clearItemFromCart } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() =>
        dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
    </div>
  )
};

export default connect(null)(CheckoutItem);