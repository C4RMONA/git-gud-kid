import React from "react";
import { CssBaseline, Box } from '@mui/material';

import PostForm from "../PostForm";
import PostList from "../PostList";

const Dashboard = () => {

  return (
    <div>Welcome to the dash!
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

        <PostForm />
        <PostList />
      </Box>
    </div >
  )
}

export default Dashboard;