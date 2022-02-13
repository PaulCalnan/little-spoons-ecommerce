import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KSm3PKYViJ08ZEa4MsgSwog9e6M4eX1yMuOvOw0RdJloXSkhM6oyR9RwfDU1QamiZLezwERbLYhY44W7B5iPSOr00N4wU57iD';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now' 
      name='Little Spoons Of Joy'
      billingAddress
      shippingAddress
      image='../assets/littlespoons-logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      striprKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;