import React from 'react';

import {Screen, Icon, Text, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text present="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text present="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
