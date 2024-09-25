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
    thumbNail: String
  }
  
  type Query {
    getAllUsers: [User]
    getUser(email: String!): User
    getUserPlants(email: String!): [Plant]
  }

  type Mutation {
    signupUser(userName: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    addPlant(email: String!, commonName: String!, thumbNail: String): User
  }

`;

module.exports = typeDefs;
