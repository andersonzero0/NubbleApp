import React from 'react';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenConteiner';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text present="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
