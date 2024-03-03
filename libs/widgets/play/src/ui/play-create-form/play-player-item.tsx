import { Icon, List } from '@shared/ui';
import { FC } from 'react';
import { Pressable } from 'react-native';

type PlayPlayerItemProps = {
  name: string;
  score?: number;
  isWinner?: boolean;
};

export const PlayPlayerItem: FC<PlayPlayerItemProps> = ({
  name = '',
  score,
  isWinner,
}) => {
  const description =
    score !== undefined ? `${score} points` : 'Tap to update result';

  return (
    <List.Item
      title={name}
      description={description}
      LeftComponent={
        <Pressable className="items-center justify-center">
          {isWinner ? (
            <Icon name="TrophyIcon" size={20} color="black" type="outline" />
          ) : (
            <Icon name="UserIcon" size={20} color="black" type="outline" />
          )}
        </Pressable>
      }
      RightComponent={
        <Pressable>
          <Icon
            name="EllipsisVerticalIcon"
            size={24}
            color="gray"
            type="outline"
          />
        </Pressable>
      }
    />
  );
};
