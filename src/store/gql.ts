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
        }
      }
      pageInfo {
        hasNextPage
        startCursor
      }
    }
  }
`;

export const me = gql`
  query me {
  me {
      name
      photoURL
    }
  }
`;

export const signUp = gql`
  mutation signUp(
    $phoneNumber: String!,
    $password: String!,
    $name: String,
    $photoURL: String,
    $photoURL2: String,
    $birthday: Date,
    $gender: Gender,
    $height: Int,
    $weight: Int,
    $isGlasses: Boolean,
    $isTattoo: Boolean,
    $isDyeing: Boolean,
  ) {
    signUp(user: {
      phoneNumber: $phoneNumber
      password: $password
      name: $name
      photoURL: $photoURL
      photoURL2: $photoURL2
      birthday: $birthday
      gender: $gender
      height: $height
      weight: $weight
      isGlasses: $isGlasses
      isTattoo: $isTattoo
      isDyeing: $isDyeing
    }) {
      id
    }
  }
`;

export const signInPhoneNumber = gql`
  mutation signInPhoneNumber(
    $phoneNumber: String!,
    $password: String!,
  ) {
    signInPhoneNumber(
      phoneNumber: $phoneNumber
      password: $password
    ) {
      token
      user{
        photoURL
        name
      }
    }
  }
`;
