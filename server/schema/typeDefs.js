const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
  }
  type Query {
   getAllUsers: [User]
   getUser(userId: ID!): User

  }

  type Mutation {
    hello: String
    addUser(
    userName: String!
    email: String!
    password: String!
    )
  }
`;

module.exports = typeDefs;
