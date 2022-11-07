import Card from 'shared/components/Card';
import { FaImage, FaUserCircle } from 'react-icons/fa';
import { FC } from 'react';
import clsx from 'clsx';

interface IPostSkeleton {
  full?: boolean;
}

const PostSkeleton: FC<IPostSkeleton> = ({ full }) => {
  const posterStyle = 'flex items-center justify-center mb-4 bg-gray-300 rounded-t';

  return (
    <Card className="rounded shadow animate-pulse ">
      <div className={clsx(posterStyle, full ? 'h-96' : 'h-64')}>
        <FaImage className="w-12 h-12 text-gray-400" />
      </div>
      <div className="p-4">
        <div className="w-48 h-2 mb-4 bg-gray-300 rounded-full" />
        <div className="h-2 bg-gray-300 rounded-full  mb-2.5" />
        <div className="h-2 bg-gray-300 rounded-full " />
        <div className="flex items-center mt-4 space-x-3">
          <FaUserCircle className="w-10 h-10 text-gray-300" />
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2" />
            <div className="w-24 h-2 bg-gray-300 rounded-full " />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostSkeleton;
