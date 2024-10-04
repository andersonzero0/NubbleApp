import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold present="paragraphMedium">
      Não há publicações no seu feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold present="paragraphMedium" mb="s16">
          Não foi possível carregar o feed 😢
        </Text>
        <Button onPress={refetch} preset="outline" title="recarregar">
          Tentar novamente
        </Button>
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
