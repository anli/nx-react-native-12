import * as Types from '@shared/api';

import { gql } from '@apollo/client';
import { PlaysListItemFragmentDoc } from './plays-list-item.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PlaysListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PlaysListQuery = {
  __typename?: 'query_root';
  plays: Array<{
    __typename?: 'Plays';
    id: any;
    playedAt: any;
    gameId: string;
    players: Array<{
      __typename?: 'PlaysPlayers';
      playerId: any;
      isWinner: boolean;
    }>;
    playersAggregate: {
      __typename?: 'PlaysPlayersAggregate';
      aggregate?: {
        __typename?: 'PlaysPlayersAggregateFields';
        count: number;
      } | null;
    };
  }>;
};

export const PlaysListDocument = gql`
  query PlaysList {
    plays {
      ...PlaysListItem
    }
  }
  ${PlaysListItemFragmentDoc}
`;

/**
 * __usePlaysListQuery__
 *
 * To run a query within a React component, call `usePlaysListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaysListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaysListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaysListQuery(
  baseOptions?: Apollo.QueryHookOptions<PlaysListQuery, PlaysListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlaysListQuery, PlaysListQueryVariables>(
    PlaysListDocument,
    options
  );
}
export function usePlaysListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlaysListQuery,
    PlaysListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PlaysListQuery, PlaysListQueryVariables>(
    PlaysListDocument,
    options
  );
}
export function usePlaysListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PlaysListQuery,
    PlaysListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PlaysListQuery, PlaysListQueryVariables>(
    PlaysListDocument,
    options
  );
}
export type PlaysListQueryHookResult = ReturnType<typeof usePlaysListQuery>;
export type PlaysListLazyQueryHookResult = ReturnType<
  typeof usePlaysListLazyQuery
>;
export type PlaysListSuspenseQueryHookResult = ReturnType<
  typeof usePlaysListSuspenseQuery
>;
export type PlaysListQueryResult = Apollo.QueryResult<
  PlaysListQuery,
  PlaysListQueryVariables
>;
