import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps,
  Pressable,
} from 'react-native';

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

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export type PressableBoxProps = PressableProps & RestyleTypes;

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable,
);
