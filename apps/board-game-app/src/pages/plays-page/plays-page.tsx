import { SafeAreaView, TopNavigation } from '@shared/ui';
import { PlaysList } from '@widgets/play';
import { View } from 'react-native';

export const PlaysPage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView edges={['top']}>
        <View className="flex-1 py-4 gap-4">
          <View className="flex-1">
            <PlaysList
              ListHeaderComponent={<TopNavigation.Emphasize title="Plays" />}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
