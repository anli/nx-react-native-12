import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type PlaysListItemFragment = {
  __typename?: 'Plays';
  id: number;
  playedAt: any;
  gameId: string;
};

export const PlaysListItemFragmentDoc = gql`
  fragment PlaysListItem on Plays {
    id
    playedAt
    gameId
  }
`;
