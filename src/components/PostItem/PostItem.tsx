import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {ProfileUser} from '../ProfileUser/ProfileUser';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}

export function PostItem({post, hideCommentAction}: Props) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          profileUrl: post.author.profileURL,
          username: post.author.userName,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions hideCommentAction={hideCommentAction} post={post} />
      <PostBottom
        hideCommentAction={hideCommentAction}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
