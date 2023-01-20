// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
// export default function PreviewPage() {
//   React.useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);
//     if (query.get('success')) {
//       console.log('Order placed! You will receive an email confirmation.');
//     }

//     if (query.get('canceled')) {
//       console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
//     }
//   }, []);

//   return (
//     <form action="/api/stripe/stripe" method="POST">
//       <section>
//         <button type="submit" role="link">
//           Checkout
//         </button>
//       </section>
//       <style jsx>
//         {`
//           section {
//             background: #ffffff;
//             display: flex;
//             flex-direction: column;
//             width: 400px;
//             height: 112px;
//             border-radius: 6px;
//             justify-content: space-between;
//           }
//           button {
//             height: 36px;
//             background: #556cd6;
//             border-radius: 4px;
//             color: white;
//             border: 0;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease;
//             box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
//           }
//           button:hover {
//             opacity: 0.8;
//           }
//         `}
//       </style>
//     </form>
//   );
// }
// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./payment";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function App() {
//   const [clientSecret, setClientSecret] = React.useState("");

//   React.useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }