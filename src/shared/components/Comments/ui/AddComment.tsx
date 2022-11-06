import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuth } from 'shared/common/util';
import Button from 'shared/components/Button';

interface IAddComment {
  avatarUrl: string;
}

const AddComment: FC<IAddComment> = ({ avatarUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuth()) navigate('/login');
  };

  return (
    <>
      <div className="flex gap-2 p-3">
        <img
          src={avatarUrl || '/noavatar.png'}
          alt="avatar"
          className="object-cover w-8 h-8 rounded-full"
        />
        <textarea
          id="message"
          rows={3}
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
