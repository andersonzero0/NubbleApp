import React from 'react';

import {RadioButtonItemProps, RadioButtonSelector, Screen} from '@components';
import {AppScreenProps} from '@routes';

const items: RadioButtonItemProps[] = [
  {label: 'Ativado', isSelected: false, onPress: () => {}},
  {label: 'Desativado', isSelected: true, onPress: () => {}},
  {
    label: 'Padrão do sistema',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    isSelected: false,
    onPress: () => {},
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector items={items} />
    </Screen>
  );
}
