import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
