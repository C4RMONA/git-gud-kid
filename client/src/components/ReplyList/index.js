import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';

import CardComponent from '../Card';

const replies = [
  {
    id: '1',
    text: 'this is awesome'
  },
  {
    id: '2',
    text: 'thanks for sharing!'
  }
]

const ReplyList = () => {
  return(
    <div>
      <CardComponent cardWidth="49.5vw">
      <Card cardWidth="49.5vw">
        <div className='reply-header'>
        <span>Replies</span>
        </div>
        <div className='card-body'>
          {replies && 
          replies.map(reply => (
            <p key={reply.id}>
              {reply.text}
            </p>
          ))
          }
        </div>
        
      </Card>
      </CardComponent>
    </div>
  )
}

export default ReplyList;