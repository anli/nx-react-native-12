import { BoxButton } from '@shared/ui';
import { useAuthentication } from '@shared/utils';

export const LogoutButton = () => {
  const { logout } = useAuthentication();

  return (
    <BoxButton type="solid" color="primary" title="Logout" onPress={logout} />
  );
};
