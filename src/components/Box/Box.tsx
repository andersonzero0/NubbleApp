import React from 'react';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from '@shopify/restyle';
import {Theme} from '../../theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  RNTouchableOpacityProps;
  
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
