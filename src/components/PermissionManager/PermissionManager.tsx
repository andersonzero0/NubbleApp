import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {
  ActivityIndicator,
  Box,
  Button,
  Screen,
  Text,
  TextProps,
} from '@components';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center" gap="s16">
        <Text preset="headingSmall" textAlign="center">
          {description}
        </Text>
        {isLoading && <ActivityIndicator color="primary" />}
        {status === 'unavailable' && (
          <Text {...$messageStyle}>
            Esse recurso não está disponível no seu dispositivo
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box gap="s16">
            {Platform.OS === 'android' && (
              <Text {...$messageStyle}>
                É necessário abrir e fechar o App novamente após alterar as
                configurações
              </Text>
            )}
            <Button
              title="Abrir Configurações"
              onPress={Linking.openSettings}
            />
          </Box>
        )}
      </Box>
    </Screen>
  );
}

const $messageStyle: TextProps = {
  preset: 'paragraphMedium',
  textAlign: 'center',
  color: 'error',
  bold: true,
};
