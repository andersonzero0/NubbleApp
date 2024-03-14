import React from 'react';
import {Text} from '../Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}
      /* style={{
        backgroundColor: colors.buttonPrimary,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: "center"
    }} */
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text present="paragraphMedium" bold color='primaryContrast'>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
