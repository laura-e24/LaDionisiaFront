import '../styles/main.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Provider } from 'react-redux';
import { store } from '../app/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  )

}
