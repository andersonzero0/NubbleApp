import React, {useEffect} from 'react';

import {settingsService, useAppColor} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorSchema} from '@hooks';
import {Router} from '@routes';
import {darkTheme, theme} from '@theme';

import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): JSX.Element {
  const appColor = useAppColor();
  useAppColorSchema();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
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
