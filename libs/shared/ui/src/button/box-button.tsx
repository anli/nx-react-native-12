import clsx from 'clsx';
import { FC } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

const typeConfigs = {
  solid: {
    container: 'bg-green-500',
  },
};

type BoxButtonProps = PressableProps & {
  type: 'solid';
  color: 'primary';
  title: string;
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
        typeConfigs[type].container,
        className
      )}
      {...rest}
    >
      <Text className="text-white font-semibold text-base text-center">
        {title}
      </Text>
    </Pressable>
  );
};
