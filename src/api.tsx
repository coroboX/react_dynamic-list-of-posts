import { User, Post, Comment } from './types';

const URL_USERS = 'https://mate.academy/students-api/users';
const URL_POSTS = 'https://mate.academy/students-api/posts';
const URL_COMMENTS = 'https://mate.academy/students-api/comments';

interface ResponseData<D> {
  data: D;
  error?: string;
}

type UsersData = ResponseData<User[]>;
type CommentsData = ResponseData<Comment[]>;
type PostsData = ResponseData<Post[]>;

function loadUsers(): Promise<User[]> {
  return fetch(URL_USERS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Users API not successful ${response.statusText}`);
    })
    .then(({ data }: UsersData) => data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch Users, press button again');
    });
}

function loadComments(): Promise<Comment[]> {
  return fetch(URL_COMMENTS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Comments API not successful ${response.statusText}`);
    })
    .then(({ data }: CommentsData) => data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch Comments, press button again');
    });
}

function loadPosts(): Promise<Post[]> {
  return fetch(URL_POSTS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Posts API ot successful ${response.statusText}`);
    })
    .then(({ data }: PostsData) => data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch Posts, press button again');
    });
}

export const loadData = async (): Promise<[User[], Post[], Comment[]]> => {
  const loadedData = await Promise.all([
    loadUsers(),
    loadPosts(),
    loadComments(),
  ]);

  return loadedData;
};
