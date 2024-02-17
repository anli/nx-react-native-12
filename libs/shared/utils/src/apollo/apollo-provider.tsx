import {
  ApolloClient,
  ApolloProvider as NativeApolloProvider,
} from '@apollo/client';
import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useAuthentication } from '../authentication';
import { makeApolloClient } from './make-apollo-client';

type ApolloProviderProps = {
  uri: string;
};

export const ApolloProvider: FC<PropsWithChildren<ApolloProviderProps>> = ({
  uri,
  children,
}) => {
  const [client, setClient] = useState<ApolloClient<unknown> | undefined>(
    undefined
  );
  const { getCredentials } = useAuthentication();

  const fetchSession = useCallback(async () => {
    const credentials = await getCredentials();
    const client = makeApolloClient(uri, credentials?.idToken);
    return setClient(client);
  }, [getCredentials, uri]);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  if (!client) {
    return null;
  }

  return (
    <NativeApolloProvider client={client}>{children}</NativeApolloProvider>
  );
};
