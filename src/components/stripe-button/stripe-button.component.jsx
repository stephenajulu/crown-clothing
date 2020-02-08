import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price, currentUser }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_DX93HOnXHRWGxo1tMxHlecNj00MZV1t0MS';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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
    disabled={!currentUser || price === 0}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(StripeCheckoutButton);