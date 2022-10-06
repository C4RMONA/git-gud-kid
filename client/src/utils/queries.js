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
`

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
`

// export const QUERY_CLASS = gql`
//   query class($classId: String) {
//     class(classId: $classId) {
//       name
//       studentCount
//       students{
//         _id
//         name
//         parent
//       }
//     }
//   }
// `

// export const QUERY_STUDENT = gql`
//   query student($studentId: ID) {
//     student(_id: $studentId) {
//       _id
//       name
//       parent
//     }
//   }
// `

// export const QUERY_STAFF_ME = gql`
//   {
//     staff_me {
//       _id
//       teacher
//       email
//       posts {
//         _id
//         postText
//         comments {
//           _id
//           commentText
//           parent
//         }
//       }
//     }
//   }
// `