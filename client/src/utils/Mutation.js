import { gql } from '@apollo/client';

export const ADD_USER_PLANT_MUTATION = gql`
    mutation AddPlant($email: String!, $commonName: String!) {
        addPlant(email: $email, commonName: $commonName) {
             _id
            userName
            email
            password
            plant {
                _id
                commonName
            }
        }
    }
`;