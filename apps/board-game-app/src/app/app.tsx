import { NavigationContainer } from '@react-navigation/native';
import './../../global.css';

import { ApolloProvider, AuthenticationProvider } from '@shared/utils';
import Config from 'react-native-config';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <AuthenticationProvider
      domain={Config.AUTH0_DOMAIN}
      clientId={Config.AUTH0_CLIENT_ID}
    >
      <ApolloProvider uri="https://harmless-stork-15.hasura.app/v1/graphql">
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ApolloProvider>
    </AuthenticationProvider>
  );
};
