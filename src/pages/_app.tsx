import '../assets/style/main.css'
import "../assets/style/css/all.min.css"
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PayPalScriptProvider options={{"client-id": "AblxtD2reevwavlznLk2dExX_F3G60DiWyMnPPNo-3GtZDwSrkOyNoePfb8hHEGD7vTKUurvreqcI31Y"}}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider enableSystem={false} attribute="class">
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </ThemeProvider>
        </PersistGate>
      </PayPalScriptProvider>
    </Provider>
  )

}
