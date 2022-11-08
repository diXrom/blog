import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IPost,
  IComment,
  IUserResponse,
  IAuthorization,
  IAuthResponse,
  INewPost,
} from './lib/types';

import { prepareHeaders, getProvidesTags } from './lib/util';
import { API_URL, API_PATH, TAGS } from './model/constants';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, prepareHeaders }),
  tagTypes: [TAGS.POSTS, TAGS.POST, TAGS.POSTTAGS, TAGS.COMMENTS],
  endpoints: (build) => ({
    getComments: build.query<IComment[], void>({
      query: () => API_PATH.COMMENT,
      providesTags: [TAGS.COMMENTS],
    }),
    getComment: build.query<IComment[], string>({
      query: (id) => `${API_PATH.COMMENT}/${id}`,
      providesTags: [TAGS.COMMENTS],
    }),
    addComment: build.mutation<IComment, Partial<IComment>>({
      query: (body) => ({ url: `${API_PATH.COMMENT}`, method: 'POST', body }),
      invalidatesTags: [TAGS.COMMENTS, TAGS.POSTS],
    }),
    getUser: build.query<IUserResponse, void>({ query: () => API_PATH.USER }),
    signUp: build.mutation<IAuthResponse, IAuthorization>({
      query: (body) => ({ url: API_PATH.REGISTER, method: 'POST', body }),
    }),
    signIn: build.mutation<IAuthResponse, Partial<IAuthorization>>({
      query: (body) => ({ url: API_PATH.LOGIN, method: 'POST', body }),
    }),
    getTags: build.query<string[], void>({
      query: () => API_PATH.TAGS,
      providesTags: [TAGS.POSTTAGS],
    }),
    uploadImage: build.mutation<{ secure_url: string }, FormData>({
      query: (body) => ({ url: API_PATH.UPLOAD, method: 'POST', body }),
    }),
    getPosts: build.query<IPost[], void>({
      query: () => API_PATH.POST,
      providesTags: getProvidesTags,
    }),
    getPost: build.mutation<IPost, string>({
      query: (id) => ({ url: `${API_PATH.POST}/${id}`, method: 'GET' }),
      invalidatesTags: [TAGS.POSTS],
    }),
    addPost: build.mutation<IPost, INewPost>({
      query: (body) => ({ url: API_PATH.POST, method: 'POST', body }),
      invalidatesTags: [TAGS.DEFAULT, TAGS.POSTTAGS],
    }),
    updatePost: build.mutation<IPost, INewPost>({
      query: ({ _id, ...body }) => ({ url: `${API_PATH.POST}/${_id}`, method: 'PATCH', body }),
      invalidatesTags: (_, __, { _id }) => [{ type: TAGS.POSTS, _id }, TAGS.POSTTAGS],
    }),
    deletePost: build.mutation<{ success: boolean }, string>({
      query: (_id) => ({ url: `${API_PATH.POST}/${_id}`, method: 'DELETE' }),
      invalidatesTags: (_, __, _id) => [{ type: TAGS.POSTS, id: _id }, TAGS.POSTTAGS],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostMutation,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useSignInMutation,
  useSignUpMutation,
  useGetUserQuery,
  useGetTagsQuery,
  useUploadImageMutation,
  useGetCommentsQuery,
  useGetCommentQuery,
  useAddCommentMutation,
} = postAPI;
