import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type BoxButtonType = 'solid' | 'plain';
type BoxButtonProps = PressableProps & {
  type: BoxButtonType;
  title: string;
};
type TypeConfig = Record<
  BoxButtonType,
  {
    container?: ClassValue;
    text?: ClassValue;
  }
>;

const typeConfigs: TypeConfig = {
  solid: {
    container: 'bg-green-500',
    text: 'text-white',
  },
  plain: {
    container: '',
    text: 'text-black',
  },
};
const disabledConfigs: TypeConfig = {
  solid: {
    container: 'bg-gray-300',
    text: 'text-white',
  },
  plain: {
    container: '',
    text: 'text-gray-300',
  },
};

export const BoxButton: FC<BoxButtonProps> = ({
  title,
  className,
  type = 'solid',
  disabled,
  ...rest
}) => {
  return (
    <Pressable
      className={clsx(
        'py-3.5 px-6 rounded-md',
        typeConfigs[type]?.container,
        disabled ? disabledConfigs[type]?.container : undefined,
        className
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={clsx(
          'font-semibold text-base text-center',
          typeConfigs[type]?.text,
          disabled ? disabledConfigs[type]?.text : undefined
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
};
