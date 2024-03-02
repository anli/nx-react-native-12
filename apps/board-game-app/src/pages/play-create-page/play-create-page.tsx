import { CloseNavigationButton } from '@entities/page';
import { BoxButton, SafeAreaView, TopNavigation } from '@shared/ui';
import { View } from 'react-native';

export const PlayCreatePage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView edges={['bottom']}>
        <View className="flex-1">
          <TopNavigation.Regular
            title="Create Play"
            RightComponent={<CloseNavigationButton />}
          />
        </View>
        <View className="p-4">
          <BoxButton type="solid" title="Save" />
        </View>
      </SafeAreaView>
    </View>
  );
};
