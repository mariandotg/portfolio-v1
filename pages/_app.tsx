import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../app/index';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='/theme.js' strategy='beforeInteractive' />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
