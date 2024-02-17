import { BoxButton } from '@shared/ui';
import { useAuthentication } from '@shared/utils';

export const LoginButton = () => {
  const { login } = useAuthentication();

  return (
    <BoxButton type="solid" color="primary" title="Login" onPress={login} />
  );
};
