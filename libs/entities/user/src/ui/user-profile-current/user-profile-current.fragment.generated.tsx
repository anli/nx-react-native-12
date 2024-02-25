import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type UserProfileCurrentFragment = { __typename?: 'Users'; name: string };

export const UserProfileCurrentFragmentDoc = gql`
  fragment UserProfileCurrent on Users {
    name
  }
`;
