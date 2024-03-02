import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type BoxButtonType = 'solid' | 'plain';
type BoxButtonProps = PressableProps & {
  type: BoxButtonType;
  title: string;
};

const typeConfigs: Record<
  BoxButtonType,
  {
    container?: ClassValue;
    text?: ClassValue;
  }
> = {
  solid: {
    container: 'bg-green-500',
    text: 'text-white',
  },
  plain: {
    container: '',
    text: 'text-black',
  },
};

export const BoxButton: FC<BoxButtonProps> = ({
  title,
  className,
  type = 'solid',
  ...rest
}) => {
  return (
    <Pressable
      className={clsx(
        'py-3.5 px-6 rounded-md',
        typeConfigs[type]?.container,
        className
      )}
      {...rest}
    >
      <Text
        className={clsx(
          'font-semibold text-base text-center',
          typeConfigs[type]?.text
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
};
