import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type PlaysListItemFragment = {
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
};

export const PlaysListItemFragmentDoc = gql`
  fragment PlaysListItem on Plays {
    id
    playedAt
    gameId
    players {
      playerId
      isWinner
    }
    playersAggregate {
      aggregate {
        count
      }
    }
  }
`;
