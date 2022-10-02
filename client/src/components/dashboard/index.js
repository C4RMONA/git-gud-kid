import React from "react";
import { CssBaseline, Box } from '@mui/material';
import Card from "../Card";
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
          <Card cardWidth="49.5vw">
            <PostList/>
          </Card>
      </Box>
    </div >
  )
}

export default Dashboard;