import React from "react";
import { CssBaseline, Box } from '@mui/material';

import PostList from "../PostList";
import PostDialoug from "../AddPost";

const Dashboard = () => {

  return (
    <div>Welcome to the dash!
      <CssBaseline />
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
      > 
        <PostDialoug/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <PostList />
      </Box>
    </div >
  )
}

export default Dashboard;