import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme';
import {Box} from '../Box';

type ButtonProps = {
  title: string;
};

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      alignItems="center"
      /* style={{
        backgroundColor: colors.buttonPrimary,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: "center"
    }} */
    >
      <Text present="paragraphMedium" bold style={{color: '#ffffff'}}>
        {title}
      </Text>
    </Box>
  );
}
