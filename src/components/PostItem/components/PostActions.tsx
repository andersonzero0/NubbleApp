import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();

  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" mt="s16" gap="s24">
      <Item
        onPress={likeReaction.reactToPost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={likeReaction.reactionCount}
        marked={likeReaction.hasReacted}
      />
      <Item
        disabled={hideCommentAction}
        onPress={navigateToComments}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={post.commentCount}
        marked={false}
      />
      <Item
        onPress={favoriteReaction.reactToPost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteReaction.reactionCount}
        marked={favoriteReaction.hasReacted}
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
  disabled?: boolean;
}

function Item({onPress, icon, text, marked, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      flexDirection="row"
      alignItems="center"
      hitSlop={10}
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
