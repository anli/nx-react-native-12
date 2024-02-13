import { BoxButton, SafeAreaView } from '@shared/ui';
import { Text, View } from 'react-native';

export const WelcomePage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="flex-1 p-4">
          <View className="flex-1">
            <Text>Welcome Page</Text>
          </View>
          <BoxButton type="solid" color="primary" title="Login" />
        </View>
      </SafeAreaView>
    </View>
  );
};
