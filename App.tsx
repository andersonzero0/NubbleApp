import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}
export default App;

// Test
