import React from 'react';
import { Grid } from '@material-ui/core';
import { User } from './User';
import { PreparedPost } from '../types';

// import { CommentList } from '../CommentList/CommentList';
// import { PostShape } from './PostShape';

export const Post: React.FC<PreparedPost> = (props: PreparedPost) => {
  const {
    title,
    body,
    id,
    postUser,
    // postComments,
  } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {id}
          <User
            name={postUser.name}
            email={postUser.email}
            address={postUser.address}
          />
        </Grid>
        <Grid item xs={10}>
          <h4>{title}</h4>
          <div>{body}</div>
        </Grid>
      </Grid>
    </>
  );
};
