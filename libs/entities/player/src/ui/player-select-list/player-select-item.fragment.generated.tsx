import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type PlayerSelectListItemFragment = {
  __typename?: 'Players';
  id: any;
  name?: string | null;
};

export const PlayerSelectListItemFragmentDoc = gql`
  fragment PlayerSelectListItem on Players {
    id
    name
  }
`;
