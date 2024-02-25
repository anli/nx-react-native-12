import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingPage, WelcomePage } from '../../pages';

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
      <Stack.Screen name="LoadingPage" component={LoadingPage} />
    </Stack.Navigator>
  );
};
