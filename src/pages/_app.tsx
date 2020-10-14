import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/lib/apolloCient';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'styles/globals.scss';
import 'react-quill/dist/quill.snow.css';
import { VisibleContextProvider } from 'src/hooks/useModalVisibleContext';
import LogInModal from 'src/components/LogInModal';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <VisibleContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
        <LogInModal />
      </VisibleContextProvider>
    </ApolloProvider>
  );
}

export default App;
