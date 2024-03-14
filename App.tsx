import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text present="headingLarge">AndersonViana</Text>

          <Button title="Entrar"/>
          <Button loading title="Load" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
