import { gql } from '@apollo/client';

export const SELECT_USER = gql`
    query GetUser($email: String!) {
        getUser(email: $email) {
            _id
            userName
            email
            password
            plant {
                _id
                commonName
                thumbNail
            }
        }
    }
`;