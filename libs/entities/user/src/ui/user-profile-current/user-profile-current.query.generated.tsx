import * as Types from '@shared/api';

import { gql } from '@apollo/client';
import { UserProfileCurrentFragmentDoc } from './user-profile-current.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserProfileCurrentQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;

export type UserProfileCurrentQuery = {
  __typename?: 'query_root';
  usersByPk?: { __typename?: 'Users'; name: string } | null;
};

export const UserProfileCurrentDocument = gql`
  query UserProfileCurrent($id: String!) {
    usersByPk(id: $id) {
      ...UserProfileCurrent
    }
  }
  ${UserProfileCurrentFragmentDoc}
`;

/**
 * __useUserProfileCurrentQuery__
 *
 * To run a query within a React component, call `useUserProfileCurrentQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileCurrentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileCurrentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserProfileCurrentQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  > &
    (
      | { variables: UserProfileCurrentQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  >(UserProfileCurrentDocument, options);
}
export function useUserProfileCurrentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  >(UserProfileCurrentDocument, options);
}
export function useUserProfileCurrentSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    UserProfileCurrentQuery,
    UserProfileCurrentQueryVariables
  >(UserProfileCurrentDocument, options);
}
export type UserProfileCurrentQueryHookResult = ReturnType<
  typeof useUserProfileCurrentQuery
>;
export type UserProfileCurrentLazyQueryHookResult = ReturnType<
  typeof useUserProfileCurrentLazyQuery
>;
export type UserProfileCurrentSuspenseQueryHookResult = ReturnType<
  typeof useUserProfileCurrentSuspenseQuery
>;
export type UserProfileCurrentQueryResult = Apollo.QueryResult<
  UserProfileCurrentQuery,
  UserProfileCurrentQueryVariables
>;
