import * as Types from '@shared/api';

import { gql } from '@apollo/client';
import { PlayerThumbnailFragmentDoc } from './player-thumbnail.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PlayerThumbnailQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;

export type PlayerThumbnailQuery = {
  __typename?: 'query_root';
  playersByPk?: { __typename?: 'Players'; name?: string | null } | null;
};

export const PlayerThumbnailDocument = gql`
  query PlayerThumbnail($id: uuid!) {
    playersByPk(id: $id) {
      ...PlayerThumbnail
    }
  }
  ${PlayerThumbnailFragmentDoc}
`;

/**
 * __usePlayerThumbnailQuery__
 *
 * To run a query within a React component, call `usePlayerThumbnailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerThumbnailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerThumbnailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlayerThumbnailQuery(
  baseOptions: Apollo.QueryHookOptions<
    PlayerThumbnailQuery,
    PlayerThumbnailQueryVariables
  > &
    (
      | { variables: PlayerThumbnailQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlayerThumbnailQuery, PlayerThumbnailQueryVariables>(
    PlayerThumbnailDocument,
    options
  );
}
export function usePlayerThumbnailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlayerThumbnailQuery,
    PlayerThumbnailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PlayerThumbnailQuery,
    PlayerThumbnailQueryVariables
  >(PlayerThumbnailDocument, options);
}
export function usePlayerThumbnailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PlayerThumbnailQuery,
    PlayerThumbnailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PlayerThumbnailQuery,
    PlayerThumbnailQueryVariables
  >(PlayerThumbnailDocument, options);
}
export type PlayerThumbnailQueryHookResult = ReturnType<
  typeof usePlayerThumbnailQuery
>;
export type PlayerThumbnailLazyQueryHookResult = ReturnType<
  typeof usePlayerThumbnailLazyQuery
>;
export type PlayerThumbnailSuspenseQueryHookResult = ReturnType<
  typeof usePlayerThumbnailSuspenseQuery
>;
export type PlayerThumbnailQueryResult = Apollo.QueryResult<
  PlayerThumbnailQuery,
  PlayerThumbnailQueryVariables
>;
