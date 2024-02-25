import { useAuth0 } from 'react-native-auth0';

export const useAuthentication = () => {
  const { authorize, clearSession, user, ...rest } = useAuth0();

  const login = async () => {
    await authorize();
  };

  const logout = async () => {
    await clearSession();
  };

  return {
    isAuthenticated: !!user,
    id: user?.sub ?? '',
    imageUrl: user?.picture,
    login,
    logout,
    user,
    ...rest,
  };
};
