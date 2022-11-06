import { useGetUserQuery } from 'shared/api';
import { STORAGE_TOKEN } from './constants';

const isAuth = () => !!localStorage.getItem(STORAGE_TOKEN);

const useUser = () => {
  const { user } = useGetUserQuery(undefined, {
    skip: !isAuth(),
    selectFromResult: ({ data }) => ({ user: data }),
  });
  return user;
};

export { isAuth, useUser };
