import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

interface usePaginatedListResult<TData> {
  list: TData[];
  isError: boolean;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): usePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<boolean>(false);
  // const [page, setPage] = useState(1);
  // const [hasNextPage, setHasNextPage] = useState(true);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
