import {MutationOptions} from '@infra';
import {useAuthCredentials, useSearchHistoryService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';

export function useAuthSignOut(options?: MutationOptions<AuthCredentials>) {
  const {removeCredentials} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();

  const mutation = useMutation<string, Error, void>({
    mutationFn: () => authService.signOut(),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: removeCredentials,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}
