import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query posts($username: String) {
  posts(username: $username) {
    _id
    username
    postText
    createdAt
    replyCount
    replies {
      _id
      createdAt
      username
      replyBody
    }
  }
}
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      username
      postText
      createdAt
      replyCount
      replies {
        _id
        username
        replyBody
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        replyCount
        replies {
          _id
          createdAt
          replyBody
          username
        }
      }
    }
  }
`;
