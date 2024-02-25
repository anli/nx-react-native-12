import { UserProfileCurrent } from '@entities/user';
import { LogoutButton } from '@features/authenticate';
import { SafeAreaView } from '@shared/ui';
import { View } from 'react-native';

export const ProfilePage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView edges={['top']}>
        <View className="flex-1 p-4 gap-4">
          <View className="flex-1">
            <UserProfileCurrent />
          </View>
          <LogoutButton />
        </View>
      </SafeAreaView>
    </View>
  );
};
