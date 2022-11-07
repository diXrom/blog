import { motion } from 'framer-motion';

import PostList from 'widgets/PostList';
import Comments from 'shared/components/Comments';
import Tags from 'shared/components/Tags';
import { fade, motionVariants } from 'shared/common/styles';
import { btn, btnActive } from './lib/styles';
import useMainPage from './model/useMainPage';

const MainPage = () => {
  const { sort, setSort, posts, loading, comments, tags, fetching, setFilter } = useMainPage();

  return (
    <motion.div variants={fade} {...motionVariants}>
      <div className="flex gap-2 mb-4 text-sm font-medium">
        <div className={sort === 'popular' ? btn : btnActive} onClick={() => setSort('popular')}>
          Популярное
        </div>
        <div className={sort === 'new' ? btn : btnActive} onClick={() => setSort('new')}>
          Новое
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 2xl:grid-cols-4 2xl:gap-4">
        <PostList posts={posts} loading={loading} />
        <div className="flex flex-col gap-5 md:flex-row 2xl:flex-col">
          <Tags tags={tags} setFilter={setFilter} />
          <Comments full={false} comments={comments} loading={fetching} />
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
