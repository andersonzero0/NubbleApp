import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon';
import {Pressable} from 'react-native';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
