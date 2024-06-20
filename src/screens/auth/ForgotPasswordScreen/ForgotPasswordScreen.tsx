import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen() {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text present="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text present="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's48'}}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
