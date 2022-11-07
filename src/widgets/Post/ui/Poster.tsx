import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'shared/api/lib/types';
import { imgAnimation, motionVariants } from 'shared/common/styles';

interface IPoster {
  imageUrl: string;
  full: boolean;
  post: IPost;
}

const Poster: FC<IPoster> = ({ imageUrl, full, post }) => {
  if (!imageUrl) return null;

  return (
    <Link
      to={`/post/${post._id}`}
      state={{ post }}
      className={`${full ? 'pointer-events-none' : ''}`}
    >
      <motion.img
        variants={imgAnimation}
        {...motionVariants}
        src={imageUrl}
        alt="poster"
        className={clsx('object-cover w-full transition rounded-t-lg', full ? 'h-96' : 'h-64')}
      />
    </Link>
  );
};

export default Poster;
