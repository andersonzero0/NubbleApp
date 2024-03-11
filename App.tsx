import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text present='headingLarge'>AndersonViana</Text>
    </SafeAreaView>
  );
}
export default App;
