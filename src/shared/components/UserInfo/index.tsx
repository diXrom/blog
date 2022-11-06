import { FC, memo } from 'react';

interface IUserInfo {
  fullName: string;
  info: string;
  avatarUrl: string;
}

const UserInfo: FC<IUserInfo> = ({ fullName, info, avatarUrl }) => (
  <div className="flex items-center gap-2">
    <img src={avatarUrl} alt="avatar" className="object-cover w-8 h-8 rounded-full" />
    <div>
      <div className="text-sm font-semibold text-gray-700">{fullName}</div>
      <div className="text-xs text-gray-600">{info}</div>
    </div>
  </div>
);

export default memo(UserInfo);
