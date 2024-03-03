import { FC, ReactElement } from 'react';
import { Text } from '../text';

import { View } from 'react-native';

type TopNavigationRegularProps = {
  title: string;
  RightComponent?: ReactElement;
  LeftComponent?: ReactElement;
};

export const TopNavigationRegular: FC<TopNavigationRegularProps> = ({
  title,
  RightComponent,
  LeftComponent,
}) => {
  return (
    <View className="bg-white px-4 h-[50px] justify-between flex-row items-center">
      <View className="absolute right-0 left-0 items-center">
        <Text type="heading2">{title}</Text>
      </View>
      <View>{LeftComponent}</View>
      <View className="flex-row">{RightComponent}</View>
    </View>
  );
};
