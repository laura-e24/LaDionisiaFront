import '../styles/main.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider enableSystem={true} attribute="class">
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )

}
