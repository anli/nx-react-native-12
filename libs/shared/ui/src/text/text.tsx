import { clsx } from 'clsx';
import { FC } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

export const Text: FC<NativeTextProps> = ({ children, className, ...rest }) => {
  return (
    <NativeText className={clsx('text-black', className)} {...rest}>
      {children}
    </NativeText>
  );
};
