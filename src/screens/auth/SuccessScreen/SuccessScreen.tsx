import React from 'react';
import {Screen} from '../../../components/Screen';
import {Icon} from '../../../components/Icon';
import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route }: ScreenProps) {
  function goBackToBegin() {}

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
