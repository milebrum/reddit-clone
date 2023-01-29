import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
