import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({}: //route,
AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen title="Comentários" canGoBack>
      <Text present="headingSmall">PostComment Screen</Text>
    </Screen>
  );
}
