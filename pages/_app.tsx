import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
