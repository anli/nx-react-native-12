import { FC } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { Text } from '../text';

type ListItemProps = PressableProps & {
  title: string;
  description?: string;
  RightComponent?: JSX.Element;
  LeftComponent?: JSX.Element;
};

const ListItem: FC<ListItemProps> = ({
  title,
  description,
  RightComponent,
  LeftComponent,
  ...rest
}) => {
  const titleType = description ? 'title5' : 'title3';

  return (
    <Pressable
      className="bg-white py-2 flex-row active:opacity-50 items-center gap-4"
      {...rest}
    >
      {LeftComponent}
      <View className="flex-1 justify-center">
        <Text type={titleType}>{title}</Text>
        {!!description && (
          <Text type="body2" className="text-gray-500">
            {description}
          </Text>
        )}
      </View>
      {RightComponent}
    </Pressable>
  );
};

export const List = {
  Item: ListItem,
};
