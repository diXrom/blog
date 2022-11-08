import { FC, memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddCommentMutation } from 'shared/api';
import { isAuth, useUser } from 'shared/common/util';
import Button from 'shared/components/Button';

interface IAddComment {
  imageUrl: string;
}

const AddComment: FC<IAddComment> = ({ imageUrl }) => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const user = useUser();
  const [comment, setComment] = useState('');
  const [addComment] = useAddCommentMutation();

  const handleClick = () => {
    if (!isAuth()) navigate('/login');
    addComment({ id, comment, imageUrl, name: user?.fullName });
  };

  return (
    <>
      <div className="flex gap-2 p-3">
        <img
          src={imageUrl || '/noavatar.png'}
          alt="avatar"
          className="object-cover w-8 h-8 rounded-full"
        />
        <textarea
          id="message"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-0 focus:border-gray-900 resize-none duration-300 transition"
          placeholder="Написать комментарий..."
        />
      </div>
      <Button outline className="ml-12" onClick={handleClick}>
        Отправить
      </Button>
    </>
  );
};

export default memo(AddComment);
