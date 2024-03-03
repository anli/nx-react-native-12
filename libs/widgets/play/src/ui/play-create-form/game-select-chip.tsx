import { useGame } from '@entities/game';
import { useNavigation } from '@react-navigation/native';
import { ActionChip } from '@shared/ui';
import { FC } from 'react';

export const GameSelectChip: FC<{ id?: string }> = ({ id }) => {
  const { data } = useGame(id);
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('GameSelectPage');
  };

  return (
    <ActionChip
      title={data?.name ?? 'What did you played?'}
      imagePath={data?.thumbnailUrl}
      small
      outlined
      onPress={handlePress}
    />
  );
};
