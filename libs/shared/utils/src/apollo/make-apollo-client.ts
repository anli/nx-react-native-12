import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const makeApolloClient = (uri: string, accessToken?: string) => {
  const httpLink = createHttpLink({
    uri,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: accessToken ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(),
  });

  return client;
};
