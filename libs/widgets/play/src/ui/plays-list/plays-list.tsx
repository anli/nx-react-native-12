import { GameThumbnail, useGame } from '@entities/game';
import { PlayerThumbnail } from '@entities/player';
import { Icon, List } from '@shared/ui';
import { useAuthentication } from '@shared/utils';
import { formatDistanceToNow } from 'date-fns';
import { FC } from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
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
      contentContainerClassName="ios:px-4 android:px-2"
      renderItem={renderItem}
      {...rest}
    />
  );
};

const PlaysListItem: FC<PlaysListItemFragment> = ({
  gameId,
  playedAt,
  playersAggregate,
  players,
}) => {
  const { data: gameData } = useGame(gameId);
  const hasPlayers = (playersAggregate?.aggregate?.count ?? 0) > 0;
  const description = `${
    playersAggregate.aggregate?.count
  } players · ${formatDistanceToNow(playedAt, {
    addSuffix: true,
  })}`;

  return (
    <List.Item
      LeftComponent={<GameThumbnail id={gameId} />}
      RightComponent={
        hasPlayers ? <PlayerThumbnails players={players} /> : undefined
      }
      title={gameData?.name}
      description={description}
    />
  );
};

const PlayerThumbnails: FC<Pick<PlaysListItemFragment, 'players'>> = ({
  players,
}) => {
  const { id } = useAuthentication();
  return (
    <View className="flex-row">
      {players
        .filter((player) => player.isWinner)
        .sort((a, b) => Number(a.playerId === id) - Number(b.playerId === id))
        .map(({ playerId }) => (
          <PlayerThumbnail
            key={playerId}
            id={playerId}
            renderIcon={(props) => <Icon name="TrophyIcon" {...props} />}
          />
        ))}
    </View>
  );
};
