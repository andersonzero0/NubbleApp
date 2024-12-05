import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 10,
  reactionCount: 15,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'John Doe',
    profileURL: 'fake-url',
    userName: 'john_doe',
  },
};
