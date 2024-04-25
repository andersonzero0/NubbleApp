import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon}/>
      <Text present="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text present="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button mt='s40' onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
