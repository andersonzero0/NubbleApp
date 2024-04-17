import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon';
import {Button} from '../../../components/Button';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text present="headingLarge" mb="s8">
          Olá!
        </Text>
        <Text present="paragraphLarge" semiBold mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          errorMessage="Mensagem de erro"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon name="eyeOn" color="gray2" />}
          boxProps={{mb: 's10'}}
        />

        <Text present="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button preset="outline" title="Criar uma conta" mt="s12" />
      </View>
    </SafeAreaView>
  );
}
