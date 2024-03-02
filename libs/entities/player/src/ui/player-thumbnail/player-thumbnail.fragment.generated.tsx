import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type PlayerThumbnailFragment = {
  __typename?: 'Players';
  name?: string | null;
};

export const PlayerThumbnailFragmentDoc = gql`
  fragment PlayerThumbnail on Players {
    name
  }
`;
