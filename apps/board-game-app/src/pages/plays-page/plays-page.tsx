import { useNavigation } from '@react-navigation/native';
import { Icon, SafeAreaView, TopNavigation } from '@shared/ui';
import { PlaysList } from '@widgets/play';
import { Pressable, View } from 'react-native';

export const PlaysPage = () => {
  return (
    <View className="flex-1">
      <SafeAreaView edges={['top']}>
        <View className="flex-1 py-4 gap-4">
          <View className="flex-1">
            <View className="px-4">
              <TopNavigation.Emphasize
                title="Plays"
                RightComponent={<PlayCreateButton />}
              />
            </View>
            <PlaysList />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const PlayCreateButton = (props) => {
  const { navigate } = useNavigation();

  const handleCreatePlay = () => {
    navigate('PlayCreatePage');
  };

  return (
    <Pressable onPress={handleCreatePlay}>
      <Icon name="PlusIcon" color="black" size={24} />
    </Pressable>
  );
};
