import { FC, ReactElement } from 'react';
import { Text } from '../text';

import { View } from 'react-native';

type TopNavigationEmphasizeProps = {
  title: string;
  RightComponent?: ReactElement;
};

export const TopNavigationEmphasize: FC<TopNavigationEmphasizeProps> = ({
  title,
  RightComponent,
}) => {
  return (
    <View className="bg-white h-[50px] justify-between flex-row items-center">
      <View className="flex-row items-center" style={{ gap: 8 }}>
        <Text type="heading1">{title}</Text>
      </View>
      <View className="flex-row">{RightComponent}</View>
    </View>
  );
};
