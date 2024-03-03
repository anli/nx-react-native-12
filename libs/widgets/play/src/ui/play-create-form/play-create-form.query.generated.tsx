import * as Types from '@shared/api';

import { gql } from '@apollo/client';
import { PlayCreateFormFragmentDoc } from './play-create-form.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PlayCreateFormQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type PlayCreateFormQuery = {
  __typename?: 'query_root';
  players: Array<{
    __typename?: 'Players';
    id: any;
    name?: string | null;
    userId?: string | null;
  }>;
};

export const PlayCreateFormDocument = gql`
  query PlayCreateForm {
    players {
      ...PlayCreateForm
    }
  }
  ${PlayCreateFormFragmentDoc}
`;

/**
 * __usePlayCreateFormQuery__
 *
 * To run a query within a React component, call `usePlayCreateFormQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayCreateFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayCreateFormQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayCreateFormQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PlayCreateFormQuery,
    PlayCreateFormQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlayCreateFormQuery, PlayCreateFormQueryVariables>(
    PlayCreateFormDocument,
    options
  );
}
export function usePlayCreateFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlayCreateFormQuery,
    PlayCreateFormQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PlayCreateFormQuery, PlayCreateFormQueryVariables>(
    PlayCreateFormDocument,
    options
  );
}
export function usePlayCreateFormSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PlayCreateFormQuery,
    PlayCreateFormQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PlayCreateFormQuery,
    PlayCreateFormQueryVariables
  >(PlayCreateFormDocument, options);
}
export type PlayCreateFormQueryHookResult = ReturnType<
  typeof usePlayCreateFormQuery
>;
export type PlayCreateFormLazyQueryHookResult = ReturnType<
  typeof usePlayCreateFormLazyQuery
>;
export type PlayCreateFormSuspenseQueryHookResult = ReturnType<
  typeof usePlayCreateFormSuspenseQuery
>;
export type PlayCreateFormQueryResult = Apollo.QueryResult<
  PlayCreateFormQuery,
  PlayCreateFormQueryVariables
>;
