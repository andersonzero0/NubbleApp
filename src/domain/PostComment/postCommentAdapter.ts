import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postAPI: PostCommentAPI): PostComment {
  return {
    id: postAPI.id,
    message: postAPI.message,
    author: {
      id: postAPI.user.id,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
      profileURL: postAPI.user.profile_url,
    },
    createdAt: postAPI.created_at,
  };
}

export const postCommentAdapter = {toPostComment};
