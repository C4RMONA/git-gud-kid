import React from 'react';
import { useParams } from 'react-router-dom';
import ReplyList from '../components/ReplyList';
import ReplyForm from '../components/AddReply'
import Card from '../components/Card';

// import db queries
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import { CssBaseline, Box } from '@mui/material';
import Auth from '../utils/auth'

const OnePost = props => {
  const { id: postId } = useParams();
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });
  const post = data?.post || {};

  if (loading) {
    return <div>posts loading...</div>;
  }
  return (
    <div className='single-post'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Card cardWidth={'59.9vw'}>
          <div>
            <h1>{post.username}</h1>
            <p>
              {post.postText}
            </p>
          </div>
        </Card>
        <Card cardWidth={'59.9vw'}>
          {post.replyCount > 0 && <ReplyList replies={post.replies} />}
        </Card>
      </Box>
          {Auth.loggedIn() && <ReplyForm postId={post._id} />}
    </div>
  );
};

export default OnePost;
