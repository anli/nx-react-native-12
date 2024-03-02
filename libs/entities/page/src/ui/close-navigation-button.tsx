import { useNavigation } from '@react-navigation/native';
import { Icon } from '@shared/ui';
import { Pressable } from 'react-native';

export const CloseNavigationButton = () => {
  const { canGoBack, goBack } = useNavigation();

  const handlePress = () => {
    canGoBack() && goBack();
  };

  return (
    <Pressable onPress={handlePress}>
      <Icon name="XMarkIcon" color="black" size={24} />
    </Pressable>
  );
};
