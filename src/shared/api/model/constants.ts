const API_URL = 'https://blog-backend-production-b8dd.up.railway.app';

const API_PATH = {
  POST: '/post',
  TAGS: '/tags',
  COMMENT: '/comment',
  USER: '/user',
  UPLOAD: '/upload',
  LOGIN: '/login',
  REGISTER: '/register',
};

const TAGS = {
  DEFAULT: { type: 'Posts', id: 'LIST' },
  POSTS: 'Posts',
  POST: 'Post',
  POSTTAGS: 'Tags',
  COMMENTS: 'Comments',
};

export { API_URL, API_PATH, TAGS };
