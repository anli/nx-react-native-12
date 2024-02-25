import { FC } from 'react';
import { View } from 'react-native';
import { CircleSnail, CircleSnailPropTypes } from 'react-native-progress';

type SizeConfigKey = 'sm' | 'lg' | 'xl';
type SizeConfigs = Record<SizeConfigKey, number>;
type SpinnerProps = Partial<Omit<CircleSnailPropTypes, 'size'>> & {
  size?: SizeConfigKey;
};

const sizeConfigs: SizeConfigs = {
  sm: 24,
  lg: 30,
  xl: 42,
};

export const Spinner: FC<SpinnerProps> = ({
  size = 'sm',
  color = 'white',
  className,
  ...rest
}) => {
  return (
    <View>
      <CircleSnail
        className={className}
        size={sizeConfigs[size]}
        color={color}
        {...rest}
      />
    </View>
  );
};
