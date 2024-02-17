import { NavigationContainer } from '@react-navigation/native';
import './../../global.css';

import { AuthenticationProvider } from '@features/authenticate';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <AuthenticationProvider
      domain="anlitz.au.auth0.com"
      clientId="bVpau6JDWcVK9FIaQpoHTEJbFJc8aVA2"
    >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};
