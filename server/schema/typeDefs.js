const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    plant: [Plant]
  }
  
  type Plant {
  _id: ID
  commonName: String!
  }
  
  type Query {
   getAllUsers: [User]
   getUser(email: String!): User

  }

  type Mutation {
    signupUser(userName: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
  }

`;

module.exports = typeDefs;
