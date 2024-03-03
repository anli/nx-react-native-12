import * as Types from '@shared/api';

import { gql } from '@apollo/client';
export type PlayCreateFormFragment = {
  __typename?: 'Players';
  id: any;
  name?: string | null;
  userId?: string | null;
};

export const PlayCreateFormFragmentDoc = gql`
  fragment PlayCreateForm on Players {
    id
    name
    userId
  }
`;
