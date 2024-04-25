import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text present="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text present="paragraphLarge" semiBold mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        boxProps={{mb: 's10'}}
        placeholder="Digite sua senha"
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        present="paragraphSmall"
        bold
        color="primary">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" mt="s48" />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
