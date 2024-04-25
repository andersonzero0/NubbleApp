import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma",
      icon: {
        name: 'checkRound',
        color: 'success'
      }
    })
  }

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
