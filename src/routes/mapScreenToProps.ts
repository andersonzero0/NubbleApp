import {IconProps} from '@components';

import {AppTabBottomParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
