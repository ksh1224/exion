import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/lib/apolloCient';
import { AppProps } from 'next/app';
import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
