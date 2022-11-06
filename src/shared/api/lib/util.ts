import { STORAGE_TOKEN } from 'shared/common/constants';
import { TAGS } from '../model/constants';
import { IPost } from './types';

const prepareHeaders = (headers: Headers) => {
  headers.set('Accept', 'application/json');
  headers.set('Authorization', `Bearer ${localStorage.getItem(STORAGE_TOKEN) || ''}`);
  return headers;
};

const getProvidesTags = (result: IPost[] | undefined) =>
  result
    ? [...result.map(({ _id }) => ({ type: TAGS.POSTS, _id } as const)), TAGS.DEFAULT]
    : [TAGS.DEFAULT];

export { prepareHeaders, getProvidesTags };
