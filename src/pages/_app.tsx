import '../assets/style/main.css'
import "../assets/style/css/all.min.css"
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';

import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},5000);
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)
      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  return loading && (<div className='spinner-wrapper'>
    <div className="spinner"></div></div>)
}



export default function App({ Component, pageProps }: AppProps) {
  return (
    <><Loading/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
      </PersistGate>
    </Provider>
    </>
  )
}
