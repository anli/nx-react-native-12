import { ApolloProvider as NativeApolloProvider } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';
import { makeApolloClient } from './make-apollo-client';

type ApolloProviderProps = {
  uri: string;
  token: string;
};

export const ApolloProvider: FC<PropsWithChildren<ApolloProviderProps>> = ({
  uri,
  children,
  token,
}) => {
  const client = makeApolloClient(uri, token);

  return (
    <NativeApolloProvider client={client}>{children}</NativeApolloProvider>
  );
};
