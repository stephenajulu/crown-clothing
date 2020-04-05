import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { clearAllCartItems } from '../../redux/cart/cart.action';

const StripeCheckoutButton = ({ price, currentUser, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_DX93HOnXHRWGxo1tMxHlecNj00MZV1t0MS';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
      dispatch(clearAllCartItems());
    }).catch(error => {
      console.log('Payment error', error.toString());
      alert('There was an issue with your payment, please use the provided test credit card');
    });
  }

  return (
    <StripeCheckout
    label={currentUser ? 'Pay Now' : 'You need to sign in to pay'}
    name='Crown Clothing'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    disabled={!currentUser}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(StripeCheckoutButton);