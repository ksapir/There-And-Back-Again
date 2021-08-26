import { gql } from '@apollo/client';

export const QUERY_TRAILS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getTrails {
    trails {
      _id
      name
      length
      features
    }
  }
`;