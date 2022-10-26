import React from 'react';
import { Card } from '@mui/material';

import ReplyList from '../components/ReplyList';
import ReplyForm from '../components/ReplyForm';



const Post = () => {

  return (
    <div>
      <Card cardWidth="49.5vw">
        <ReplyList />
        <ReplyForm />
      </Card>
    </div>
  )
}

export default Post;