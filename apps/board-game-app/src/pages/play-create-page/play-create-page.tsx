import { BackNavigationButton } from '@entities/page';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BoxButton, SafeAreaView, TopNavigation } from '@shared/ui';
import { PlayCreateForm, usePlayCreateForm } from '@widgets/play';
import { useEffect } from 'react';
import { View } from 'react-native';

export const PlayCreatePage = () => {
  const { canGoBack, goBack, navigate, setParams } = useNavigation();
  const { params: { gameId, addPlayerId } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    playersFieldArray,
  } = usePlayCreateForm({ gameId });
  const { append } = playersFieldArray;

  useEffect(() => {
    if (addPlayerId) {
      append({ playerId: addPlayerId, isWinner: false });
      setParams({ addPlayerId: undefined });
    }
  }, [addPlayerId, append, setParams]);

  const handleSave = () => {
    canGoBack() && goBack();
  };

  const handleSelect = (playerIds: string[]) => {
    navigate('PlayerSelectPage', { playerIds });
  };

  return (
    <View className="flex-1">
      <SafeAreaView edges={['top', 'bottom']}>
        <View className="flex-1">
          <TopNavigation.Regular
            title="Create Play"
            LeftComponent={<BackNavigationButton />}
          />
          <PlayCreateForm
            control={control}
            playersFieldArray={playersFieldArray}
            onSelect={handleSelect}
          />
        </View>
        <View className="p-4">
          <BoxButton
            type="solid"
            title="Save"
            onPress={handleSubmit(handleSave)}
            disabled={!isValid}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
