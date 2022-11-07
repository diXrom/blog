import { useState } from 'react';
import { useGetCommentsQuery, useGetPostsQuery, useGetTagsQuery } from 'shared/api';

const useMainPage = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('popular');
  const { posts, loading } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isFetching }) => ({
      posts: data
        ? [...data]
            .filter((post) => post.tags.some((tag) => tag === filter || filter === 'all'))
            .sort((a, b) => {
              if (sort === 'popular') return b.viewsCount - a.viewsCount;
              return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
            })
        : [],
      loading: isLoading || isFetching,
    }),
  });
  const { comments, fetching } = useGetCommentsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isFetching }) => ({
      comments: data
        ? [...data]
            .sort((a, b) => Number(new Date(b.created)) - Number(new Date(a.created)))
            .slice(0, 5)
        : [],
      fetching: isLoading || isFetching,
    }),
  });
  const { tags } = useGetTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      tags: data ? Array.from(new Set(data)) : [],
    }),
  });

  return { sort, setSort, posts, loading, comments, tags, fetching, setFilter };
};
export default useMainPage;
