import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log(token);
    alert('Payment successful')
}


// Stripe likes price in cents
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51IJvFSIjLbqCnQgYnLxp84lExf6vTCiPs4ZbM2fIs6yZ7X1nH52pw9FD0X0KkILJkoDQKfBHKYWKz6HLuMiBlb1q00QmhyD9KF"
    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'Crwn Clothing Inc.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;