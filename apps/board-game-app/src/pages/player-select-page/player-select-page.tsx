import { CloseNavigationButton } from '@entities/page';
import { PlayerSelectList } from '@entities/player';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TopNavigation } from '@shared/ui';
import { View } from 'react-native';

export const PlayerSelectPage = () => {
  const { navigate } = useNavigation();
  const { params: { playerIds = [] } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayerSelectPage'>>();

  const handleSelect = (playerId: string) => {
    return navigate({
      name: 'PlayCreatePage',
      params: {
        addPlayerId: playerId,
      },
      merge: true,
    });
  };

  return (
    <View className="flex-1">
      <View className="pt-2">
        <TopNavigation.Regular
          title="Add player"
          RightComponent={<CloseNavigationButton />}
        />
      </View>
      <PlayerSelectList playerIds={playerIds} onSelect={handleSelect} />
    </View>
  );
};
