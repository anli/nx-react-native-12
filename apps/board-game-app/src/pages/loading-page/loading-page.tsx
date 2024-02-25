import { SafeAreaView, Spinner, Text } from '@shared/ui';
import { View } from 'react-native';

export const LoadingPage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="flex-1 justify-center items-center gap-2">
          <Spinner color="black" size="lg" />
          <Text>Loading</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
