import { gql } from '@apollo/client';

export const addBookmark = gql`
  mutation addBookmark($shootingId: Int! ) {
    addBookmark (shootingId: $shootingId) {
      userId
      shootingId
    }
  }
`;

export const removeBookmark = gql`
  mutation removeBookmark($shootingId: Int! ) {
    removeBookmark (shootingId: $shootingId) {
      userId
      shootingId
    }
  }
`;
