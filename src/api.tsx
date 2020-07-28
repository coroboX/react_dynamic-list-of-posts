import { UserType, PostType, CommentType } from './types';

const URL_USERS = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json';
const URL_POSTS = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json';
const URL_COMMENTS = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json';

function loadUsers(): Promise<UserType[]> {
  return fetch(URL_USERS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Users API not successful ${response.statusText}`);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch UsersType, press button again');
    });
}

function loadComments(): Promise<CommentType[]> {
  return fetch(URL_COMMENTS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Comments API not successful ${response.statusText}`);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch Comments, press button again');
    });
}

function loadPosts(): Promise<PostType[]> {
  return fetch(URL_POSTS)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Response of Posts API ot successful ${response.statusText}`);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error.message);

      throw new Error('Failed to Fetch Posts, press button again');
    });
}

export const loadData = async (): Promise<[UserType[], PostType[], CommentType[]]> => {
  const loadedData = await Promise.all([
    loadUsers(),
    loadPosts(),
    loadComments(),
  ]);

  return loadedData;
};
