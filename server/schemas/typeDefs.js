const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    firstType: String
  }
`

module.exports = typeDefs