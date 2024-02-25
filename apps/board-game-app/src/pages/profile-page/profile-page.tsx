import { gql, useQuery } from '@apollo/client';
import { LogoutButton } from '@features/authenticate';
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
  const { data } = useUser(id);

  return (
    <View className="flex-row gap-4">
      <Profile source={{ uri: imageUrl }} />
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-medium">{data?.users_by_pk?.name}</Text>
      </View>
    </View>
  );
};

const useUser = (id: string) => {
  return useQuery(
    gql`
      query GetUser($id: String!) {
        users_by_pk(id: $id) {
          id
          name
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );
};
