const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }
  type Query {
   getAllUsers: [User]
   getUser(userId: ID!): User

  }

  type Mutation {
    hello: String
  }
`;

module.exports = typeDefs;
