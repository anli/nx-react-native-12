import { ListHeader } from '@shared/ui';
import { FC } from 'react';
import { Control, Controller, UseFieldArrayReturn } from 'react-hook-form';
import { View } from 'react-native';
import { PlayCreateFormData } from '../../model';
import { DateSelectChip } from './date-select-chip';
import { GameSelectChip } from './game-select-chip';
import { usePlayCreateFormQuery } from './play-create-form.query.generated';
import { PlayPlayerItem } from './play-player-item';

type PlayCreateFormProps = {
  control: Control<PlayCreateFormData>;
  playersFieldArray: UseFieldArrayReturn<PlayCreateFormData, 'players'>;
  onSelect?: (playerIds: string[]) => void;
};

export const PlayCreateForm: FC<PlayCreateFormProps> = ({
  control,
  playersFieldArray,
  onSelect,
}) => {
  const { fields } = playersFieldArray;
  const { data: { players } = {} } = usePlayCreateFormQuery();

  const handleSelect = () => {
    onSelect?.(fields.map((_field) => _field.playerId));
  };

  return (
    <View className="flex-1 px-4">
      <ListHeader title="Game" />
      <View className="py-2 flex-row flex-wrap gap-3">
        <Controller
          name="gameId"
          control={control}
          render={({ field: { value } }) => <GameSelectChip id={value} />}
        />
        <Controller
          name="date"
          control={control}
          render={({ field: { value, onChange } }) => (
            <DateSelectChip value={value} onChange={onChange} />
          )}
        />
      </View>

      <ListHeader
        title="Players"
        buttonType="text"
        buttonTitle="Select"
        onPress={handleSelect}
      />
      {fields?.map((_field, index) => {
        const player = players?.find(
          (_player) => _player.id === _field.playerId
        );
        return (
          <PlayPlayerItem
            key={_field.id}
            {..._field}
            name={player?.name ?? ''}
            onWinnerPress={() =>
              playersFieldArray.update(index, {
                ..._field,
                isWinner: !_field.isWinner,
              })
            }
            onDelete={() => playersFieldArray.remove(index)}
          />
        );
      })}
    </View>
  );
};
