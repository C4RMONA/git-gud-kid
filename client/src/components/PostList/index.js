import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';

import './index.css';
import Card from '../Card';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet. Stand By...</h3>;
  }

  return (
    <div className="postList">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>{title}</h2>
        <div className="postMap">
          {posts &&
            posts.map(post => (
              <Link className="card-link" to={`/post/${post._id}`}>
                <Card cardWidth="59.5vw" key={post._id}>
                  <div>
                    <Typography sx={{ width: '100%'}}>
                      {post.postText}
                    </Typography>
                      <p>posted on {post.createdAt}</p>
                      <p>Replies: {post.replyCount} </p>
                    <div>
                      <FavoriteBorderIcon className="icon"></FavoriteBorderIcon>
                      <MessageIcon className="icon"></MessageIcon>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </Box>
    </div>
  );
};

export default PostList;
