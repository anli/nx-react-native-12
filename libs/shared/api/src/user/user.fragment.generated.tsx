import { gql } from '@apollo/client';
export type UserFragment = { __typename?: 'users'; id: string; name: string };

export const UserFragmentDoc = gql`
  fragment user on users {
    id
    name
  }
`;
