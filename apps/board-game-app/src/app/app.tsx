import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationProvider, QueryClientProvider } from '@shared/utils';
import { remapProps } from 'nativewind';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './../../global.css';
import { RootStack } from './navigation';

remapProps(FlatList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

export const App = () => {
  return (
    <SafeAreaProvider>
      <AuthenticationProvider
        domain={Config.AUTH0_DOMAIN}
        clientId={Config.AUTH0_CLIENT_ID}
      >
        <QueryClientProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </QueryClientProvider>
      </AuthenticationProvider>
    </SafeAreaProvider>
  );
};
