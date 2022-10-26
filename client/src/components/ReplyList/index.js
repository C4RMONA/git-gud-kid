import { Typography } from '@mui/material';
import React from 'react';
import Card from '../Card';

const ReplyList = ({ replies }) => {
  return (
    <div className='reply-list'>
      <div className="reply-header">
        <h3>Replies</h3>
      </div>
      <div className="replyMap">
        {replies &&
          replies.map(reply => (
            <Card cardWidth="59.5vw" key={reply._id}>
              <div>
                <h3>{reply.username}</h3>
                <Typography sx={{ width: '100%' }}>
                  {reply.replyBody}
                </Typography>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ReplyList;
