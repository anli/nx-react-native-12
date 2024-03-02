import { GameThumbnail, useGame } from '@entities/game';
import { PlayerThumbnail } from '@entities/player';
import { Icon, List } from '@shared/ui';
import { useAuthentication } from '@shared/utils';
import { formatDistanceToNow } from 'date-fns';
import { FC, ReactNode, Suspense } from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { PlaysListItemFragment } from './plays-list-item.fragment.generated';
import { usePlaysListSuspenseQuery } from './plays-list.query.generated';

type PlaysListProps = Omit<
  FlatListProps<PlaysListItemFragment>,
  'data' | 'renderItem'
>;

export const PlaysList: FC<PlaysListProps> = ({ ...rest }) => {
  return (
    <Suspense fallback={<PlaceholderPlaysList {...rest} />}>
      <NativePlaysList {...rest} />
    </Suspense>
  );
};

const NativePlaysList: FC<PlaysListProps> = ({ ...rest }) => {
  const { data: { plays: data } = {} } = usePlaysListSuspenseQuery();

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

const PlaceholderPlaysList: FC<PlaysListProps> = ({ ListHeaderComponent }) => {
  const items = Array.from({ length: 2 }, (_, index) => index);
  return (
    <View className="ios:px-4 android:px-2">
      {ListHeaderComponent as ReactNode}
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item gap={16}>
          {items.map((value) => (
            <SkeletonPlaceholder.Item
              key={value}
              flexDirection="row"
              gap={16}
              alignItems="center"
            >
              <SkeletonPlaceholder.Item width={40} height={40} />

              <SkeletonPlaceholder.Item gap={4} flex={1}>
                <SkeletonPlaceholder.Item width={40} height={18} />
                <SkeletonPlaceholder.Item width={120} height={18} />
              </SkeletonPlaceholder.Item>

              <SkeletonPlaceholder.Item flexDirection="row" gap={8}>
                <SkeletonPlaceholder.Item
                  width={32}
                  height={32}
                  borderRadius={32}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          ))}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
