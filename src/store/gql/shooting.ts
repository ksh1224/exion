import { gql } from '@apollo/client';

export const queryShootings = gql`
  query Shootings($first: Int!, $after: String, ) {
    shootings(searchShooting: {}, first: $first, after: $after) {
      edges{
        cursor
        node {
          id
          title
          producer
          shootingStartAt
          shootingEndAt
          wage
          meetingPlace
          meetingTime
          bookmark {
            userId
            shootingId
          }
        }
      }
      pageInfo {
        hasNextPage
        startCursor
      }
    }
  }
`;
