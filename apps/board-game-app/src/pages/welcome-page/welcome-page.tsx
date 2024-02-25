import { LoginButton, LogoutButton } from '@features/authenticate';
import { SafeAreaView, Text } from '@shared/ui';
import { View } from 'react-native';

export const WelcomePage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="flex-1 p-4 gap-4">
          <View className="flex-1">
            <Text>Welcome Page</Text>
          </View>
          <LogoutButton />
          <LoginButton />
        </View>
      </SafeAreaView>
    </View>
  );
};
