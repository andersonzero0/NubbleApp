import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostCreate(option?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; imageCover: ImageForUpload}
  >({
    mutationFn: ({text, imageCover}) =>
      postService.createPost(text, imageCover),
    onSuccess: post => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.PostList]});
      if (option?.onSuccess) {
        option.onSuccess(post);
      }
    },
    onError: () => {
      if (option?.onError) {
        option.onError(option?.errorMessage || 'Erro ao criar post');
      }
    },
  });

  async function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const imageCover = await multimediaService.prepareImageForUpload(imageUri);

    mutate({text: description, imageCover});
  }

  return {
    createPost,
    isLoading,
    isError,
  };
}
