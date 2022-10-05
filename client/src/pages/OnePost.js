import React from 'react';
import { useParams } from 'react-router-dom';
import ReplyList from '../components/ReplyList';

// import db queries
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const OnePost = (props) => {
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
      <div>
          <p>
            {post.postText}
          </p>
      </div>
      {/* {post.replyCount > 0 && <ReplyList reactions={post.replies} />} */}
    </div>
  );
};

export default OnePost;
