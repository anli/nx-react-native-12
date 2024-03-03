import { BackNavigationButton } from '@entities/page';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BoxButton, ListHeader, SafeAreaView, TopNavigation } from '@shared/ui';
import { useYupValidationResolver } from '@shared/utils';
import { startOfDay } from 'date-fns';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import * as yup from 'yup';
import { DateSelectChip } from './date-select-chip';
import { GameSelectChip } from './game-select-chip';

type FormData = {
  gameId: string;
  date: string;
};

const validationSchema = yup.object({
  gameId: yup.string().required('Required'),
  date: yup.string().required('Required'),
});

export const PlayCreatePage = () => {
  const resolver = useYupValidationResolver<FormData>(validationSchema);
  const { canGoBack, goBack } = useNavigation();
  const { params: { gameId } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const defaultValues = {
    gameId: undefined,
    date: startOfDay(new Date()).toISOString(),
  };
  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues,
    resolver,
  });

  useEffect(() => {
    setValue('gameId', gameId, { shouldValidate: true });
  }, [gameId, setValue]);

  const handleSave = (data: FormData) => {
    canGoBack() && goBack();
  };

  return (
    <View className="flex-1">
      <SafeAreaView edges={['top', 'bottom']}>
        <View className="flex-1">
          <TopNavigation.Regular
            title="Create Play"
            LeftComponent={<BackNavigationButton />}
          />
          <ListHeader title="Game" />
          <View className="px-4 py-2 flex-row flex-wrap" style={{ gap: 12 }}>
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
        </View>
        <View className="p-4">
          <BoxButton
            type="solid"
            title="Save"
            onPress={handleSubmit(handleSave)}
            disabled={!isValid}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
