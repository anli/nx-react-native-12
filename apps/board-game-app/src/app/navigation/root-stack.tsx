import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, BottomNavigationProps } from '@shared/ui';
import { ApolloProvider, useAuthentication } from '@shared/utils';
import Config from 'react-native-config';
import {
  GameSelectPage,
  LoadingPage,
  PlayCreatePage,
  PlayerSelectPage,
  PlaysPage,
  ProfilePage,
  WelcomePage,
} from '../../pages';

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
  const { isAuthenticated, isLoading, idToken } = useAuthentication();

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
      </Stack.Navigator>
    );
  }

  if (isAuthenticated && idToken) {
    return (
      <ApolloProvider uri={Config.GRAPHQL_URL} token={idToken}>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Tabs">
          <Stack.Group>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="PlayCreatePage" component={PlayCreatePage} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="GameSelectPage" component={GameSelectPage} />
            <Stack.Screen
              name="PlayerSelectPage"
              component={PlayerSelectPage}
            />
          </Stack.Group>
        </Stack.Navigator>
      </ApolloProvider>
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
