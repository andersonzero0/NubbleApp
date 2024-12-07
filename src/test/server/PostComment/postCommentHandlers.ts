import {BASE_URL, PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';
import {cloneDeep} from 'lodash';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}${POST_COMMENT_PATH}`;

let InMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);

export function resetInMemoryResponse() {
  InMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);
}

export const postCommentHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<PostCommentAPI> = InMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      InMemoryResponse.data = [newPostCommentAPI, ...InMemoryResponse.data];
      InMemoryResponse.meta = {
        ...InMemoryResponse.meta,
        total: InMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostCommentAPI, {status: 201});
    },
  ),
  http.delete<{postCommentId: string}>(
    `${FULL_URL}/:postCommentId`,
    async ({params}) => {
      InMemoryResponse.data = InMemoryResponse.data.filter(
        item => item.id.toString() !== params.postCommentId,
      );
      InMemoryResponse.meta = {
        ...InMemoryResponse.meta,
        total: InMemoryResponse.meta.total - 1,
      };

      return HttpResponse.json({message: 'removed'}, {status: 200});
    },
  ),
];
