import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { imgAnimation, motionVariants } from 'shared/common/styles';

interface IUserInfo {
  fullName: string;
  info: string;
  avatarUrl: string;
  full?: boolean;
}

const UserInfo: FC<IUserInfo> = ({ fullName, info, avatarUrl, full }) => (
  <div className="flex items-center gap-2">
    <motion.img
      src={avatarUrl}
      variants={imgAnimation}
      {...motionVariants}
      alt=""
      className="object-cover w-8 h-8 rounded-full"
    />
    <div>
      <div className="text-sm font-semibold text-gray-700">{fullName}</div>
      <div className={clsx(full ? 'text-md text-gray-800' : 'text-xs text-gray-600')}>{info}</div>
    </div>
  </div>
);

export default memo(UserInfo);
