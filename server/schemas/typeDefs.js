const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }

  type Query {
    posts(username: String): [Post]
    post(_id: ID!): Post
  }
`;

module.exports = typeDefs;
