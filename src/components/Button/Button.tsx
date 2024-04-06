import React from 'react';
import {Text} from '../Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';
import { buttonPresets } from './ButtonPresets';
import { ActivityIndicator } from '../ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset,
  disabled?: boolean,
}

export function Button({
  title,
  loading,
  preset = "primary",
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {

  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      {...buttonPreset.container}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content}/>
      ) : (
        <Text present="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
