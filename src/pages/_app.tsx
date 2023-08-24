import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../data/context/AppContext';
import { AuthProvider } from '../data/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
