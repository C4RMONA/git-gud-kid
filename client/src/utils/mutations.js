import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

// export const ADD_PARENT = gql`
//   mutation addParent($studentId: String!, $email: String!, $password: String!) {
//     addParent(studentId: $studentId, email: $email, password: $password) {
//       token
//       parent {
//         _id
//         name
//       }
//     }
//   }
// `

// export const LOGIN_TEACHER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       teacher {
//         _id
//         name
//       }
//     }
//   }
// `

// export const ADD_TEACHER = gql`
//   mutation AddTeacher($teacherId: String!, $email: String!, $password: String!) {
//     addTeacher(teacherId: $teacherId, email: $email, password: $password) {
//       token
//       teacher {
//         _id
//         name
//       }
//     }
//   }
// `

// export const ADD_POST = gql`
//   mutation addPost($postText: String!) {
//     addPost(postText: $postText) {
//       _id
//       postText
//       commentCount
//       comments {
//         _id
//       }
//     }
//   }
// `

// export const ADD_COMMENT = gql`
//   mutation addComment($PostId: ID!, $commentText: String!) {
//     addComment(commentId: $commentId, commentText: $commentText) {
//       _id
//       commentCount
//       comments {
//         _id
//         commentText
//         parent
//       }
//     }
//   }
// `