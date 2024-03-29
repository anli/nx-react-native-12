import { List } from '@shared/ui';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { PlayerSelectListItemFragment } from './player-select-item.fragment.generated';
import { usePlayerSelectListQuery } from './player-select-list.query.generated';

type PlayerSelectListProps = Partial<
  FlatListProps<PlayerSelectListItemFragment>
> & {
  playerIds: string[];
  onSelect?: (playerId: string) => void;
};

export const PlayerSelectList = ({
  playerIds,
  onSelect,
  ...rest
}: PlayerSelectListProps) => {
  const { data: { players } = {} } = usePlayerSelectListQuery();
  const data = players?.filter((_player) => !playerIds.includes(_player.id));

  const renderItem: ListRenderItem<PlayerSelectListItemFragment> = ({
    item,
  }) => {
    const handleChange = () => {
      onSelect?.(item.id);
    };

    return (
      <List.Item onPress={handleChange} title={item.name} className="px-4" />
    );
  };

  return (
    <FlatList
      bounces={false}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  );
};
