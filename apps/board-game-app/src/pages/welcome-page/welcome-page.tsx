import { BoxButton } from '@shared/ui';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WelcomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Welcome Page</Text>
        </View>
        <BoxButton title="Login" />
      </SafeAreaView>
    </View>
  );
};
