import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {theme} from '@theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default App;
