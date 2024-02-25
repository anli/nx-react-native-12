import { Profile, Text } from '@shared/ui';
import { useAuthentication } from '@shared/utils';
import { View } from 'react-native';
import { useUserProfileCurrentQuery } from './user-profile-current.query.generated';

export const UserProfileCurrent = () => {
  const { id, imageUrl } = useAuthentication();
  const { data: { usersByPk: data } = {} } = useUserProfileCurrentQuery({
    variables: { id },
    skip: !id,
  });

  return (
    <View className="flex-row gap-4">
      <Profile source={{ uri: imageUrl }} />
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-medium">{data?.name}</Text>
      </View>
    </View>
  );
};
