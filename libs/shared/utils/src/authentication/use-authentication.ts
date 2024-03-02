import { useEffect, useState } from 'react';
import { useAuth0 } from 'react-native-auth0';

export const useAuthentication = () => {
  const { authorize, clearSession, user, getCredentials, ...rest } = useAuth0();
  const [idToken, setIdToken] = useState<string | undefined>(undefined);
  const isAuthenticated = !!user;

  useEffect(() => {
    const getIdToken = async () => {
      const credentials = await getCredentials();
      return setIdToken(credentials?.idToken);
    };

    isAuthenticated ? getIdToken() : setIdToken(undefined);
  }, [getCredentials, isAuthenticated]);

  const login = async () => {
    await authorize();
  };

  const logout = async () => {
    await clearSession();
  };

  return {
    idToken,
    isAuthenticated,
    id: user?.sub ?? '',
    imageUrl: user?.picture,
    login,
    logout,
    user,
    ...rest,
  };
};
