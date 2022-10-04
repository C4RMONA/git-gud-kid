import React from "react";
import { Box, CssBaseline, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';

import './index.css'
import Card from "../Card";



const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet, Stand By</h3>
  }
  // const title = 'Teacher';

  return (
    <div className="postList">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div className="postMap">
          {posts &&
            posts.map(post => (
              <Card cardWidth="49.5vw">
                <div key={post._id}>
                  <h2>{title}</h2>
                  <p>
                    {post.username} 
                    posted on {post.createdAt}
                  </p>
                  <div>
                    <Typography sx={{ width: '800px' }}>
                      {post.postText}
                    </Typography>
                    <div>
                      <FavoriteBorderIcon className="icon"></FavoriteBorderIcon>
                      <MessageIcon className="icon"></MessageIcon>
                      <a href="/dashboard" className="comment">
                        {post.replyCount} Replies
                      </a>

                    </div>

                  </div>
                </div>
              </Card>
            ))}
        </div>
      </Box >
    </div >
  )
}

export default PostList;
