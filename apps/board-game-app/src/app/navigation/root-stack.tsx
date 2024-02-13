import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomePage } from '../../pages';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="WelcomePage"
    >
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>
  );
};
