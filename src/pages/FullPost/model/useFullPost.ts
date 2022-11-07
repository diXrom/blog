import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentQuery, useGetPostMutation, useGetPostsQuery } from 'shared/api';
import { IPost } from 'shared/api/lib/types';

const useFullPost = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const id = useParams().id as string;
  const { data: comments, isLoading } = useGetCommentQuery(id);
  const [updatePost] = useGetPostMutation();
  useGetPostsQuery();
  useEffect(() => {
    updatePost(id)
      .unwrap()
      .then((resp) => setPost(resp));
  }, [id, updatePost]);
  return { post, isLoading, comments };
};

export default useFullPost;
