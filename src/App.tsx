import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { User, Post, Comment } from './types';

interface State {
  setLoading: boolean;
  setLoaded: boolean;
  gotError: boolean;
  error: string;
  users: User[];
  comments: Comment[];
  posts: Post[];
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

  render() {
    const {
      setLoading,
      setLoaded,
      // users,
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
                // onClick={this.onLoading}
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
                      // onClick={this.onLoading}
                    >
                      Retry Loading
                    </Button>
                  </p>
                )}
            </>
          ) : (
            <p>
              Application will be here
            </p>
          )
      }
    </>
      );
  };
}

export default App;
