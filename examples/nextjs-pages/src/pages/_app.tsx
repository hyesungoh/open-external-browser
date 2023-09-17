import type { AppProps } from 'next/app';
import { useOpenExternalBrowser } from 'open-external-browser';

export default function App({ Component, pageProps }: AppProps) {
  useOpenExternalBrowser({ where: 'all' });

  return <Component {...pageProps} />;
}
