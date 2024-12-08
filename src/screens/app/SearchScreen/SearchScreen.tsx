import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </Screen>
  );
}
