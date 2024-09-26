import { gql } from '@apollo/client';

export const ADD_USER_PLANT_MUTATION = gql`
    mutation AddPlant($email: String!, $commonName: String!, $thumbNail: String) {
        addPlant(email: $email, commonName: $commonName, thumbNail: $thumbNail) {
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

export const DELETE_USER_PLANT_MUTATION = gql`
    mutation DeletePlant($email: String!, $plantId: ID!) {
        deletePlant(email: $email, plantId: $plantId) {
            success
            message
        }
    }
`;