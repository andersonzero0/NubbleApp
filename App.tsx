import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text present='headingLarge' style={{color: "black"}}>AndersonViana</Text>
    </SafeAreaView>
  );
}
export default App;
