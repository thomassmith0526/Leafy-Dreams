const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Query {
        hello: String
    }

    type Mutation {
        hello: String
    }
`;

module.exports = typeDefs;