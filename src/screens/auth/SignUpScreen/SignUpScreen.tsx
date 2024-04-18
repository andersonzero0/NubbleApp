import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon';
import {Button} from '../../../components/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {}

  return (
    <Screen canGoBack scrollable>
      <Text present="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        boxProps={{mb: 's48'}}
        placeholder="Digite sua senha"
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
