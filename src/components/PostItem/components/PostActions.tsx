import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {}

  function navigateToComments() {}

  function favoritePost() {}

  return (
    <Box flexDirection="row" mt="s16" gap="s24">
      <Item
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
        marked={true}
      />
      <Item
        onPress={navigateToComments}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        marked={false}
      />
      <Item
        onPress={favoritePost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        marked={false}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked: boolean;
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" bold preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
