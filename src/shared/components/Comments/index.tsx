import { FC, memo } from 'react';
import { IComment } from 'shared/api/lib/types';
import { isAuth, useUser } from 'shared/common/util';
import Card from 'shared/components/Card';
import UserInfo from 'shared/components/UserInfo';
import AddComment from './ui/AddComment';
import CommentsSkeleton from './ui/CommentsSkeleton';

interface IComments {
  comments: IComment[];
  full: boolean;
  loading?: boolean;
}

const Comments: FC<IComments> = ({ comments, full, loading }) => {
  const user = useUser();
  const noComments = !comments.length && !full;
  if (loading) return <CommentsSkeleton />;

  return (
    <Card className="w-full pb-3">
      <div className="p-3 text-xl font-bold">Комментарии</div>
      <div className="px-3 space-y-2">
        {comments.map((item) => (
          <UserInfo
            key={item.comment}
            fullName={item.name}
            info={item.comment}
            avatarUrl={item.avatarUrl || '/noavatar.png'}
          />
        ))}
        {noComments && <p className="text-sm text-gray-600"> Нет ни одного комментария</p>}
      </div>
      {full && <AddComment avatarUrl={user?.avatarUrl || ''} />}
    </Card>
  );
};

export default memo(Comments);
