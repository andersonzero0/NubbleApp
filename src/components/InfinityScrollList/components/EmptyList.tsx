import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refresh: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}

export function EmptyList({
  loading,
  error,
  refresh,
  emptyMessage = 'Não há publicações no seu feed',
  errorMessage = 'Não foi possível carregar o feed 😢',
}: EmptyListProps) {
  let component = (
    <Text bold preset="paragraphMedium">
      {emptyMessage}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          {errorMessage}
        </Text>
        <Button onPress={refresh} preset="outline" title="recarregar">
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
