import '../styles/main.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )

  // holadsfad
}
