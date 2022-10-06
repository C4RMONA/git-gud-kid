import React from 'react';
import { useParams } from 'react-router-dom';
import ReplyList from '../components/ReplyList';

import Card from '../components/Card';

// import db queries
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const OnePost = props => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>posts loading...</div>;
  }
  return (
    <div>
      <Card cardWidth="49.5vw">
        <div>
            <p>
              {post.postText}
            </p>
        </div>
      </Card>
        <Card>
            {post.replyCount > 0 && <ReplyList replies={post.replies} />}
        </Card>
    </div>
  );
};

export default OnePost;
