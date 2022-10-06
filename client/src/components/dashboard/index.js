import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import './index.css';

// Import Apollo hook and query
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth'

import PostList from '../PostList';
import PostDialogue from '../AddPost';

const Dashboard = () => {
  // useQuery hook to make query request from db
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div>
      {Auth.loggedIn() ? (
      <div className="dash-header">
      <h3>Welcome to Ms. Brown's classroom!</h3>
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
    ) : (
      
      Auth.renderlogin()
      )}
      </div>
    );
  };

export default Dashboard;
