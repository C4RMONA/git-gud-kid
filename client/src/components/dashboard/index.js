import React from 'react';
import { CssBaseline, Box } from '@mui/material';

// Import Apollo hook and query
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';

import PostList from '../PostList';
import PostDialogue from '../AddPost';

const Dashboard = () => {
  // useQuery hook to make query request from db
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  return (
    <div>
      Welcome to Ms. Brown's classroom!
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <PostDialogue />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PostList posts={posts} title="Here's What's Happening..." />
        )}
      </Box>
    </div>
  );
};

export default Dashboard;
