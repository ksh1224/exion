import { ApolloError } from 'apollo-server-express';

export enum ErrorString {
  UserNotExists = 'User does not exists',
  UserNotSignedIn = 'User is not signed in',
  PasswordIncorrect = 'Password is not correct',
  PhoneNumberForUserExists = 'PhoneNumber for current user is already signed up.',
  PhoneNumberSentFailed = 'PhoneNumber sent failed',
  PhoneNumberNotValid = 'Not a valid PhoneNumber address',
  UrlNotValid = 'Url is not a valid url. It should start with http.',
  FirstLastNotSupported = 'Passing both `first` and `last` is not supported.',
}

export const ErrorPhoneNumberNotVerified = (message: string): ApolloError => new ApolloError(
  message,
  'PhoneNumber_NOT_VERIFIED', {
    parameter: 'verified',
  },
);

export const ErrorPasswordIncorrect = (message: string): ApolloError => new ApolloError(
  message,
  'PASSWORD_NOT_CORRECT', {
    parameter: 'password',
  },
);

export const ErrorPhoneNumberSentFailed = (message: string): ApolloError => new ApolloError(
  message,
  'PhoneNumber_SENT_FAILED', {
    parameter: 'PhoneNumber',
  },
);

export const ErrorPhoneNumberNotValid = (message: string): ApolloError => new ApolloError(
  message,
  'PhoneNumber_VALIDATION', {
    parameter: 'PhoneNumber',
  },
);

export const ErrorPhoneNumberForUserExists = (message: string): ApolloError => new ApolloError(
  message,
  'PhoneNumber_FOR_USER_EXISTS', {
    parameter: 'PhoneNumber',
  },
);
