import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query posts($teacher: String) {
  posts(teacher: $teacher) {
    _id
    postText
    name
    commentCount
    comments {
      _id
      commentText
      parent
    }
  }
}
`

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      name
      comments{
        _id
        commentText
        parent
      }
    }
  }
`

export const QUERY_CLASS = gql`
  query class($classId: String) {
    class(classId: $classId) {
      name
      studentCount
      students{
        _id
        name
        parent
      }
    }
  }
`

export const QUERRY_STUDENT = gql`
  query student($studentId: ID) {
    student(_id: $studentId) {
      _id
      name
      parent
    }
  }
`