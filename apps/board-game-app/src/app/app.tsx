import { NavigationContainer } from '@react-navigation/native';
import './../../global.css';

import { AuthenticationProvider } from '@features/authenticate';
import Config from 'react-native-config';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <AuthenticationProvider
      domain={Config.AUTH0_DOMAIN}
      clientId={Config.AUTH0_CLIENT_ID}
    >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};
