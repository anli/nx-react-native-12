import * as Types from '@shared/api';

import { gql } from '@apollo/client';
import { PlayerSelectListItemFragmentDoc } from './player-select-item.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PlayerSelectListQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type PlayerSelectListQuery = {
  __typename?: 'query_root';
  players: Array<{ __typename?: 'Players'; id: any; name?: string | null }>;
};

export const PlayerSelectListDocument = gql`
  query PlayerSelectList {
    players {
      ...PlayerSelectListItem
    }
  }
  ${PlayerSelectListItemFragmentDoc}
`;

/**
 * __usePlayerSelectListQuery__
 *
 * To run a query within a React component, call `usePlayerSelectListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerSelectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerSelectListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayerSelectListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PlayerSelectListQuery,
    PlayerSelectListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlayerSelectListQuery, PlayerSelectListQueryVariables>(
    PlayerSelectListDocument,
    options
  );
}
export function usePlayerSelectListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlayerSelectListQuery,
    PlayerSelectListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PlayerSelectListQuery,
    PlayerSelectListQueryVariables
  >(PlayerSelectListDocument, options);
}
export function usePlayerSelectListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PlayerSelectListQuery,
    PlayerSelectListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PlayerSelectListQuery,
    PlayerSelectListQueryVariables
  >(PlayerSelectListDocument, options);
}
export type PlayerSelectListQueryHookResult = ReturnType<
  typeof usePlayerSelectListQuery
>;
export type PlayerSelectListLazyQueryHookResult = ReturnType<
  typeof usePlayerSelectListLazyQuery
>;
export type PlayerSelectListSuspenseQueryHookResult = ReturnType<
  typeof usePlayerSelectListSuspenseQuery
>;
export type PlayerSelectListQueryResult = Apollo.QueryResult<
  PlayerSelectListQuery,
  PlayerSelectListQueryVariables
>;
