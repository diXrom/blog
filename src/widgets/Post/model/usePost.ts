import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from 'shared/api';
import { IPost } from 'shared/api/lib/types';
import { useUser, isAuth } from 'shared/common/util';

const usePost = (post: IPost, full: boolean) => {
  const user = useUser();
  const navigate = useNavigate();
  const [remove] = useDeletePostMutation();

  const showBtns = () => isAuth() && user?._id === post.user._id;
  const deletePost = () => {
    remove(post._id);
    if (full) navigate('/');
  };

  return { showBtns, deletePost };
};

export default usePost;
