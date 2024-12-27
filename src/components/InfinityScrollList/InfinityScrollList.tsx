import React from 'react';
import {FlatList, FlatListProps, RefreshControl} from 'react-native';

import {QueryKeys, usePaginatedList} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {EmptyList, EmptyListProps} from './components/EmptyList';

type ItemTConstraints = {id: number | string};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: QueryKeys;
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
  emptyListProps?: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
};

export function InfinityScrollList<ItemT extends ItemTConstraints>({
  emptyListProps,
  flatListProps,
  queryKey,
  getList,
  renderItem,
}: Props<ItemT>) {
  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    [queryKey],
    getList,
  );

  const flatListRef = React.useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      refreshing={isLoading}
      ListEmptyComponent={
        <EmptyList
          loading={isLoading}
          error={isError}
          refresh={refresh}
          {...emptyListProps}
        />
      }
      {...flatListProps}
      contentContainerStyle={[
        {
          flex: list.length === 0 ? 1 : undefined,
        },
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
}
