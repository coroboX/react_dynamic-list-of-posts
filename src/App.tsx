import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { UserType, PostType, CommentType } from './types';

import { loadData } from './api';
import { User } from './components/User';

interface State {
  setLoading: boolean;
  setLoaded: boolean;
  gotError: boolean;
  error: string;
  users: UserType[];
  comments: CommentType[];
  posts: PostType[];
  preparedPosts: [];
  filteredPosts: [];
}

const initState: State = {
  setLoading: false,
  setLoaded: false,
  gotError: false,
  error: '',
  comments: [],
  users: [],
  posts: [],
  preparedPosts: [],
  filteredPosts: [],
};

export class App extends React.Component<{}, State> {
  state = initState;

  onLoading = (): void => {
    this.setState((prevState) => ({
      ...prevState,
      setLoading: true,
    }));

    loadData()
      .then(([users, posts, comments]) => {
        this.setState((prevState: State) => ({
          ...prevState,
          setLoading: false,
          setLoaded: true,
          error: '',
          gotError: false,
          users,
          comments,
          posts,
          preparedPosts: [],
          filteredPosts: [],
        }));

        console.log(users);
        console.log(posts);
        console.log(comments);
      })
      .catch(error => {
        this.setState(prevState => ({
          ...prevState,
          error: error.message,
          gotError: true,
        }));
      });
  };

  render() {
    const {
      setLoading,
      setLoaded,
      users,
      gotError,
      error,
    } = this.state;

    return (
      <>
        <h1>Dynamic list of posts</h1>
        {
          (!setLoaded)
            ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={this.onLoading}
                  disabled={setLoading}
                >
                  {setLoading ? 'Loading...' : 'Load'}
                </Button>
                {gotError === true
                && (
                  <p>
                    {error}
                    {' '}
                    <Button
                      variant="outlined"
                      color="primary"
                      type="button"
                      onClick={this.onLoading}
                    >
                      Retry Loading
                    </Button>
                  </p>
                )}
              </>
            ) : (
              <p>
                Application will be here
                Debugging:
                <ul>
                  {users.map((user: UserType) => (
                    <User
                      name={user.name}
                      email={user.email}
                      address={user.address}
                    />
                  ))}
                </ul>
              </p>
            )
        }
      </>
    );
  }
}

export default App;
