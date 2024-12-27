import {apiAdapter} from '@api';
import {ImageForUpload} from '@services';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> {
  const postAPIData = await postApi.createPost(text, imageCover);
  postAPIData.reactions = [];
  return postAdapter.toPost(postAPIData);
}

async function getById(postId: number): Promise<Post> {
  const postAPI = await postApi.getById(postId.toString());
  return postAdapter.toPost(postAPI);
}

export const postService = {
  getList,
  createPost,
  getById,
};
