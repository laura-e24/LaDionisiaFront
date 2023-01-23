import React from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ totalPrice }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );


    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url:  'http://localhost:3000/products/checkout/success'
      },
    })
    .catch(() => setMessage(error.message))

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    alert(error.message)
  };

  const paymentElementOptions = {
    layout: "tabs",
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className="border-t border-black pt-6 my-6">
        {/* <span className="flex font-semibold text-2xl justify-between">
          <p>Subtotal</p>
          <p className="text-gray-700">$200</p>
        </span>
        <span className="flex font-semibold text-2xl justify-between">
          <p>Shipping</p>
          <p className="text-gray-700">$4</p>
        </span> */}
        <span className="flex font-bold text-2xl justify-between">
          <p>Total</p>
          <p className="text-gray-700">${totalPrice}</p>
        </span>
      </div>
      <button 
        disabled={isLoading || !stripe || !elements} 
        id="submit" 
        className="group relative flex justify-center py-6 px-4 bg-[#3D3A35] hover:bg-[#1f1e1e] rounded-2xl w-full"
      >
        <span id="button-text">
          {isLoading ? 
          <div className="spinner text-2xl text-center text-white" id="spinner">Please wait...</div> 
          :  <p className="text-2xl text-center text-white">Pay now</p>}
        </span>
      </button>
    </form>
  );
}