import React from 'react';
import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList, PressableBox, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;

const ITEM_SIZE =
  (SCREEN_WIDTH - ITEM_MARGIN - SCREEN_PADDING * 2) / NUM_COLUMNS;

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <PressableBox
        gap="s4"
        onPress={() =>
          navigation.navigate('PostCommentScreen', {
            postId: item.post.id,
            postAuthorId: item.author.id,
            showPost: true,
          })
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_SIZE, height: ITEM_SIZE}}
        />
        <Text semiBold>{item.author.username}</Text>
      </PressableBox>
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
