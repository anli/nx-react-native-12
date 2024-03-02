import { Profile, ProfileProps } from '@shared/ui';
import { FC } from 'react';
import { usePlayerThumbnailQuery } from './player-thumbnail.query.generated';

type PlayerThumbnailProps = Partial<ProfileProps> & {
  id: string;
};

export const PlayerThumbnail: FC<PlayerThumbnailProps> = ({ id, ...rest }) => {
  const { data: { playersByPk: data } = {} } = usePlayerThumbnailQuery({
    variables: { id },
  });
  const url = `https://avatar.iran.liara.run/public?username=${data?.name}`;

  return <Profile source={{ uri: url }} size="xs" {...rest} />;
};
