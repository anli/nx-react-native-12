import { LogoutButton } from '@features/authenticate';
import { useGetUserQuery } from '@shared/api';
import { Profile, SafeAreaView, Text } from '@shared/ui';
import { useAuthentication } from '@shared/utils';
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

const UserProfileCurrent = () => {
  const { id, imageUrl } = useAuthentication();
  const { data } = useGetUserQuery({ variables: { id } });

  return (
    <View className="flex-row gap-4">
      <Profile source={{ uri: imageUrl }} />
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-medium">{data?.users_by_pk?.name}</Text>
      </View>
    </View>
  );
};
