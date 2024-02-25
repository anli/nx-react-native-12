import { List } from '@shared/ui';
import { formatDistanceToNow } from 'date-fns';
import { FC } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { PlaysListItemFragment } from './plays-list-item.fragment.generated';
import { usePlaysListQuery } from './plays-list.query.generated';

export const PlaysList: FC<
  Omit<FlatListProps<PlaysListItemFragment>, 'data' | 'renderItem'>
> = (rest) => {
  const { data: { plays: data } = {} } = usePlaysListQuery();

  const renderItem: ListRenderItem<PlaysListItemFragment> = ({ item }) => {
    return <PlaysListItem {...item} />;
  };

  return (
    <FlatList
      data={data}
      contentContainerClassName="px-4"
      renderItem={renderItem}
      {...rest}
    />
  );
};

const PlaysListItem: FC<PlaysListItemFragment> = ({ id, playedAt }) => {
  const title = `${id}`;
  const description = `1 players · ${formatDistanceToNow(playedAt, {
    addSuffix: true,
  })}`;

  return <List.Item title={title} description={description} />;
};
