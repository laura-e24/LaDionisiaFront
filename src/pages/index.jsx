import Head from 'next/head'
import Home from '../components/Home/Home'
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import CheckoutForm from "../components/payment";
import { useRouter } from "next/router";
function isUser(obj: any): obj is { '/roles': string[] } {
  return '/roles' in obj;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function index() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  const { user, error, isLoading } = useUser();
  const router = useRouter();
  // console.log(user);
  const handleCookieLogin = async () => {
    const res = await axios.post(`/api/login`, user);
    console.log(res);
    // if (user) {
    //   const response = await axios.post(`${process.env.RESTURL_PRODUCTS}/users/register`, user);
    //   console.log(response.data);
    // }
    if (res.status === 200 && res.data.message === "Successful login: admin" || res.data.message === "Successful login: user") {
      router.push("/");
    }
  }
  if (isLoading) return <div>...loading</div>
  if (error) return <div>{error.message}</div>
  if (user) {
    const usuario = isUser(user) ? user[`/roles`] : [];
    return handleCookieLogin() && (
    // return (
      <>
        {usuario.includes('administrador') ? (
          <>
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
              <Home />
              {/* administrador */}
            </main>
          </>
        ) : (
          <>
            <Head>
              <title>La Dionisia - Tienda de vinos</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
              <Home />
              {/* user */}
            </main>
          </>
        )}
      </>
    )
  } else {
    return (
      <div>
        <Head>
          <title>La Dionisia - Tienda de vinos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='main h-screen bg-white dark:bg-[#121212] text-black dark:text-white '>
          <Home />
          {/* guest */}
        </main>
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}


        <footer>

        </footer>
      </div>
    )
  }

}