import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, BottomNavigationProps } from '@shared/ui';
import { useAuthentication } from '@shared/utils';
import { LoadingPage, PlaysPage, ProfilePage, WelcomePage } from '../../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: 'white' },
};
const iconConfigs: BottomNavigationProps['iconConfigs'] = {
  PlaysTab: { name: 'PuzzlePieceIcon' },
  StatsTab: { name: 'ChartBarIcon' },
  ProfileTab: { name: 'UserIcon' },
};

const PlaysTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="PlaysPage" component={PlaysPage} />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
};

const TabBar = (props: BottomTabBarProps) => (
  <BottomNavigation {...props} iconConfigs={iconConfigs} />
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="PlaysTab"
      screenOptions={screenOptions}
      tabBar={TabBar}
    >
      <Tab.Screen
        name="PlaysTab"
        component={PlaysTab}
        options={{
          title: 'Plays',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export const RootStack = () => {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
      </Stack.Navigator>
    );
  }

  if (isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Tabs">
        <Stack.Group>
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="WelcomePage"
    >
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>
  );
};
