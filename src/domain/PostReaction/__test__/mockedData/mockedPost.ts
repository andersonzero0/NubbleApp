import {Post, PostReactionBase} from '@domain';

const postWithoutLike: Post = {
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
  reactions: [],
};

const postWithoutLikeResponse: PostReactionBase = {
  id: 4,
  emojiType: 'like',
  postId: postWithoutLike.id,
  userId: 1,
  createdAt: '2021-09-01T00:00:00Z',
  updatedAt: '2021-09-01T00:00:00Z',
  isChecked: true,
};

export const mockedPostWithoutLike = {
  post: postWithoutLike,
  response: postWithoutLikeResponse,
};

const postWithLike: Post = {
  ...postWithoutLike,
  reactions: [
    {
      emojiType: 'like',
      postId: postWithoutLike.id,
    },
  ],
};

const postWithLikeResponse: PostReactionBase = {
  ...postWithoutLikeResponse,
  isChecked: false,
};

export const mockedPostWithLike = {
  post: postWithLike,
  response: postWithLikeResponse,
};
