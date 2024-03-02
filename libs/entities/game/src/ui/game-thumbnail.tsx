import { FC } from 'react';
import { Image } from 'react-native';
import { useGame } from '../model';

type GameThumbnailProps = {
  id: string;
};

export const GameThumbnail: FC<GameThumbnailProps> = ({ id }) => {
  const { data } = useGame(id);

  return (
    <Image
      source={{ uri: data?.thumbnailUrl }}
      height={40}
      width={40}
      className="rounded"
    />
  );
};
