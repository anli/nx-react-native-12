import { BoxButton } from '@shared/ui';
import { useAuthentication } from '@shared/utils';

export const LogoutButton = () => {
  const { logout } = useAuthentication();

  return <BoxButton type="plain" title="Logout" onPress={logout} />;
};
