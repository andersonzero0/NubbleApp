import React from 'react';
import {Image} from 'react-native';

export interface ProfileAvatarProps {
  imageURL: string;
  size?: number;
  borderRadius?: number;
}
export function ProfileAvatar({
  imageURL,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{uri: imageURL}}
      style={{width: size, height: size, borderRadius}}
    />
  );
}
