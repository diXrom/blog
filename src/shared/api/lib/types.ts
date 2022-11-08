interface IAuthorization {
  fullName?: string;
  email: string;
  password: string;
  avatarUrl?: string;
}

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface IUserResponse extends Omit<IUser, 'passwordHash'> {}

interface IAuthResponse extends IUserResponse {
  token: string;
}

interface IComment {
  id: string;
  name: string;
  comment: string;
  imageUrl?: string;
  created: string;
}

interface IPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  comments: IComment[];
  viewsCount: number;
  imageUrl?: string;
  user: IUser;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface INewPost {
  _id?: string;
  title: string;
  text: string;
  tags: string;
  imageUrl?: string;
}

export type { IComment, IUser, IPost, IAuthorization, IUserResponse, IAuthResponse, INewPost };
