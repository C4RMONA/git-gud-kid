import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';

import ReplyList from '../components/ReplyList';
import ReplyForm from '../components/ReplyForm';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';


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