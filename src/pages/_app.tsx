import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
