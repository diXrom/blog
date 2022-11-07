import { memo, FC } from 'react';
import { FaRegCommentAlt, FaEye } from 'react-icons/fa';
import Markdown from 'markdown-to-jsx';
import clsx from 'clsx';

import UserInfo from 'shared/components/UserInfo';
import Card from 'shared/components/Card';
import { IPost } from 'shared/api/lib/types';
import { card } from './lib/styles';
import usePost from './model/usePost';
import CardHeader from './ui/CardHeader';
import Poster from './ui/Poster';

interface IPostProps {
  post: IPost;
  full: boolean;
}

const Post: FC<IPostProps> = ({ post, full }) => {
  const { showBtns, deletePost } = usePost(post, full);

  return (
    <Card className={clsx(card, `${full ? '' : 'hover:shadow-2xl'}`)}>
      <Poster full={full} post={post} imageUrl={post.imageUrl || ''} />
      <div className="px-5 py-3 space-y-2">
        <CardHeader full deletePost={deletePost} showBtns={showBtns} post={post} />
        <div className="space-x-2 text-sm font-medium text-gray-600">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        {full && <Markdown className="prose">{post.text}</Markdown>}
        <div className="flex items-end justify-between pt-2">
          <UserInfo
            fullName={post.user.fullName}
            info={new Date(post.createdAt).toLocaleDateString()}
            avatarUrl={post.user.avatarUrl || '/noavatar.png'}
          />
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaRegCommentAlt /> {post.comments.length}
            <FaEye /> {post.viewsCount}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default memo(Post);
