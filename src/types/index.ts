import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Auth: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  DateTime: any;
  Gender: any;
  Step: any;
};


export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  shootingId: Scalars['Int'];
  userId: Scalars['Int'];
};




export type Mutation = {
  __typename?: 'Mutation';
  addBookmark: Bookmark;
  addSchedule: Schedule;
  removeBookmark: Bookmark;
  removeSchedule: Schedule;
  signInPhoneNumber: AuthPayload;
  signUp: User;
};


export type MutationAddBookmarkArgs = {
  shootingId: Scalars['Int'];
};


export type MutationAddScheduleArgs = {
  shootingId: Scalars['Int'];
};


export type MutationRemoveBookmarkArgs = {
  shootingId: Scalars['Int'];
};


export type MutationRemoveScheduleArgs = {
  scheduleId: Scalars['Int'];
};


export type MutationSignInPhoneNumberArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationSignUpArgs = {
  user?: Maybe<UserCreateInput>;
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  authType?: Maybe<Profile_AuthType>;
  socialId?: Maybe<Scalars['String']>;
};

export enum Profile_AuthType {
  Apple = 'apple',
  Email = 'email',
  Facebook = 'facebook',
  Google = 'google'
}

export type Query = {
  __typename?: 'Query';
  bookmarkShootings: ShootingConnection;
  /** Fetch current user profile when authenticated. */
  me?: Maybe<User>;
  schedules: ScheduleConnection;
  selectShooting?: Maybe<Shooting>;
  shootings: ShootingConnection;
  users: UserConnection;
};


export type QueryBookmarkShootingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySchedulesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySelectShootingArgs = {
  shootingId: Scalars['Int'];
};


export type QueryShootingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  searchShooting?: Maybe<SearchShootingInput>;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  searchText?: Maybe<Scalars['String']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['Int'];
  shootingId: Scalars['Int'];
  step: Scalars['Step'];
  userId: Scalars['Int'];
};

export type ScheduleConnection = {
  __typename?: 'ScheduleConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ScheduleEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ScheduleEdge = {
  __typename?: 'ScheduleEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Schedule;
};

export type SearchShootingInput = {
  endAt?: Maybe<Scalars['Date']>;
  startAt?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type Shooting = {
  __typename?: 'Shooting';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<User_Gender>;
  id: Scalars['Int'];
  isDyeing?: Maybe<Scalars['Boolean']>;
  isGlasses?: Maybe<Scalars['Boolean']>;
  isTattoo?: Maybe<Scalars['Boolean']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWeight?: Maybe<Scalars['Int']>;
  meetingPlace?: Maybe<Scalars['String']>;
  meetingTime?: Maybe<Scalars['DateTime']>;
  minHeight?: Maybe<Scalars['Int']>;
  minWeight?: Maybe<Scalars['Int']>;
  producer?: Maybe<Scalars['String']>;
  shootingEndAt?: Maybe<Scalars['DateTime']>;
  shootingStartAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wage?: Maybe<Scalars['Int']>;
};

export type ShootingConnection = {
  __typename?: 'ShootingConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ShootingEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ShootingEdge = {
  __typename?: 'ShootingEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: Shooting;
};


export type User = {
  __typename?: 'User';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<User_Gender>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isDyeing?: Maybe<Scalars['Boolean']>;
  isGlasses?: Maybe<Scalars['Boolean']>;
  isTattoo?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  photoURL2?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Int']>;
};

export enum User_Gender {
  Female = 'female',
  Male = 'male'
}

export type UserConnection = {
  __typename?: 'UserConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type UserCreateInput = {
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Scalars['Gender']>;
  height?: Maybe<Scalars['Int']>;
  isDyeing?: Maybe<Scalars['Boolean']>;
  isGlasses?: Maybe<Scalars['Boolean']>;
  isTattoo?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  photoURL?: Maybe<Scalars['String']>;
  photoURL2?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: User;
};

export type UserUpdateInput = {
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Scalars['Gender']>;
  height?: Maybe<Scalars['Int']>;
  isDyeing?: Maybe<Scalars['Boolean']>;
  isGlasses?: Maybe<Scalars['Boolean']>;
  isTattoo?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  photoURL2?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};
