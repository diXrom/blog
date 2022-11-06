import { FaUserCircle } from 'react-icons/fa';
import Card from 'shared/components/Card';

const CommentsSkeleton = () => (
  <Card className="w-full pb-3">
    <div className="p-3 text-xl font-bold">Комментарии</div>
    <div className="px-3 space-y-3 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex items-center space-x-3">
          <FaUserCircle className="w-10 h-10 text-gray-300" />
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-2" />
            <div className="w-32 h-2 bg-gray-300 rounded-full " />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default CommentsSkeleton;
