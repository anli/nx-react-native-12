import { ActionChip, Icon, List } from '@shared/ui';
import { FC } from 'react';
import { Pressable } from 'react-native';

type PlayPlayerItemProps = {
  id: string;
  name: string;
  score?: number;
  isWinner?: boolean;
  onWinnerPress?: () => void;
  onDelete?: () => void;
};

export const PlayPlayerItem: FC<PlayPlayerItemProps> = ({
  name = '',
  score = 0,
  isWinner = false,
  onWinnerPress,
  onDelete,
}) => {
  return (
    <List.Item
      title={name}
      LeftComponent={
        <Pressable
          className="items-center justify-center"
          onPress={onWinnerPress}
        >
          {isWinner ? (
            <Icon name="TrophyIcon" size={20} color="black" type="outline" />
          ) : (
            <Icon name="UserIcon" size={20} color="black" type="outline" />
          )}
        </Pressable>
      }
      RightComponent={
        <>
          <ActionChip title={`${score}`} small outlined />
          <Pressable>
            <Icon
              name="TrashIcon"
              color="gray"
              type="outline"
              onPress={onDelete}
            />
          </Pressable>
        </>
      }
    />
  );
};
