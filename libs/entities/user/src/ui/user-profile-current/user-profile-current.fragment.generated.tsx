import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type UserFragment = { __typename?: 'users'; name: string };

export const UserFragmentDoc = gql`
  fragment user on users {
    name
  }
`;
