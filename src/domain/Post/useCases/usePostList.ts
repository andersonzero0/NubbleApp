import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
    fetchNextPage,
  };
}
