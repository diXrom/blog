import clsx from 'clsx';
import { FC } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IPost } from 'shared/api/lib/types';
import { icon, title } from '../lib/styles';

interface ICardHeader {
  post: IPost;
  full: boolean;
  showBtns: () => boolean;
  deletePost: () => void;
}

const CardHeader: FC<ICardHeader> = ({ post, full, showBtns, deletePost }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Link
        to={`/post/${post._id}`}
        state={{ post }}
        className={clsx(title, `${full ? 'pointer-events-none' : ''}`)}
      >
        {post.title}
      </Link>
      {showBtns() && (
        <>
          <Link to={`/edit/${post._id}`} state={post}>
            <FaPen className={icon} />
          </Link>
          <FaTrash className={icon} onClick={deletePost} />
        </>
      )}
    </div>
  );
};

export default CardHeader;
