import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm, Controller} from 'react-hook-form';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({username, fullName, email, password}: SignUpFormType) {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text present="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Nome completo obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Nome completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            boxProps={{mb: 's48'}}
            placeholder="Digite sua senha"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
