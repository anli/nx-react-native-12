import { FC } from 'react';
import { Text, View } from 'react-native';

type BoxButtonProps = {
  title: string;
};

export const BoxButton: FC<BoxButtonProps> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
