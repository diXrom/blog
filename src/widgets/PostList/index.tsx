import { motion } from 'framer-motion';
import { FC, memo } from 'react';
import { IPost } from 'shared/api/lib/types';
import PostSkeleton from 'widgets/Post/ui/PostSkeleton';
import Post from '../Post';

interface IPostList {
  posts: IPost[];
  loading: boolean;
}

const PostList: FC<IPostList> = ({ posts, loading }) => (
  <div className="space-y-4 2xl:col-span-3">
    {loading ? (
      <PostSkeleton />
    ) : (
      posts.map((post) => (
        <motion.div layout key={post._id}>
          <Post post={post} full={false} />
        </motion.div>
      ))
    )}
  </div>
);

export default memo(PostList);
