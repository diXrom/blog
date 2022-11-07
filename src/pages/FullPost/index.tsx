import { motion } from 'framer-motion';

import Post from 'widgets/Post';
import PostSkeleton from 'widgets/Post/ui/PostSkeleton';
import Comments from 'shared/components/Comments';
import { fade, motionVariants } from 'shared/common/styles';
import useFullPost from './model/useFullPost';

const FullPost = () => {
  const { post, isLoading, comments } = useFullPost();
  return (
    <motion.div className="flex flex-col gap-4 fade-in" variants={fade} {...motionVariants}>
      {post ? <Post post={post} full /> : <PostSkeleton full />}
      <Comments comments={comments || []} loading={isLoading} full />
    </motion.div>
  );
};

export default FullPost;
