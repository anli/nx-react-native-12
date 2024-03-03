import { BackNavigationButton } from '@entities/page';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BoxButton, SafeAreaView, TopNavigation } from '@shared/ui';
import { PlayCreateForm, usePlayCreateForm } from '@widgets/play';
import { View } from 'react-native';

export const PlayCreatePage = () => {
  const { canGoBack, goBack } = useNavigation();
  const { params: { gameId } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    playersFieldArray,
  } = usePlayCreateForm({ gameId });

  const handleSave = () => {
    canGoBack() && goBack();
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
