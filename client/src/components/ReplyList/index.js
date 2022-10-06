import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card';

const ReplyList = ({ replies }) => {
  return (
    <div>
      <Card cardWidth="49.5vw">
        <div className="reply-header">
          <span>Replies</span>
        </div>
        <div className="card-body">
          {replies &&
            replies.map(reply => (
              <Card>
                <p key={reply.id}>{reply.replyBody}</p>
              </Card>
            ))}
        </div>
      </Card>
    </div>
  );
};

export default ReplyList;
