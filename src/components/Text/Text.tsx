import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  present?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  present = 'paragraphMedium',
  bold = false,
  italic = false,
  semiBold = false,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(present, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[present], {fontFamily}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  present: TextVariants,
  bold: boolean,
  italic: boolean,
  semiBold: boolean,
) {
  if (
    present === 'headingLarge' ||
    present === 'headingMedium' ||
    present === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  if (bold && italic) {
    return $fontFamily.boldItalic;
  }
  if (bold) {
    return $fontFamily.bold;
  }
  if (semiBold && italic) {
    return $fontFamily.mediumItalic;
  }
  if (semiBold) {
    return $fontFamily.medium;
  }
  if (italic) {
    return $fontFamily.italic;
  }
  return $fontFamily.regular;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-LIght',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
