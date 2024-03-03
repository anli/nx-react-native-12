import { GameThumbnail, useGameSearch } from '@entities/game';
import { CloseNavigationButton } from '@entities/page';
import { useNavigation } from '@react-navigation/native';
import { List, SearchBar, TopNavigation } from '@shared/ui';
import { useDebounceSearch } from '@shared/utils';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const minSearchCharacter = 3;

export const GameSelectPage = () => {
  const { searchText, onSearch } = useDebounceSearch(minSearchCharacter);
  const { data: gameSearchData } = useGameSearch(searchText);
  const { navigate } = useNavigation();
  const data = searchText.length >= minSearchCharacter ? gameSearchData : [];

  const handleSelect = (id: string) => {
    return navigate({
      name: 'PlayCreatePage',
      params: {
        gameId: id,
      },
      merge: true,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <List.Item
        onPress={() => handleSelect(item.id)}
        title={item.name}
        LeftComponent={<GameThumbnail id={item.id} />}
        className="px-4"
      />
    );
  };

  return (
    <View className="flex-1">
      <SafeAreaView edges={['bottom']}>
        <FlatList
          bounces={false}
          data={data}
          ListHeaderComponent={
            <>
              <View className="pt-2">
                <TopNavigation.Regular
                  title="Select game"
                  RightComponent={<CloseNavigationButton />}
                />
              </View>

              <View className="px-4">
                <SearchBar
                  onChangeText={onSearch}
                  placeholder="Search game"
                  autoFocus
                />
              </View>
            </>
          }
          renderItem={renderItem}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};
