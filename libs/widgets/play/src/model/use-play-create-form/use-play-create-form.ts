import { useAuthentication, useYupValidationResolver } from '@shared/utils';
import { startOfDay } from 'date-fns';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { usePlayCreateFormQuery } from '../../ui/play-create-form/play-create-form.query.generated';

export type PlayCreateFormData = {
  gameId?: string;
  date: string;
  players: { playerId: string; score?: number; isWinner: boolean }[];
};
type UsePlayCreateFormProps = Partial<PlayCreateFormData>;

const defaultValues = {
  gameId: undefined,
  date: startOfDay(new Date()).toISOString(),
  players: [],
};

const validationSchema = yup.object({
  gameId: yup.string().required('Required'),
  date: yup.string().required('Required'),
  players: yup.array().min(1, 'Required'),
});

export const usePlayCreateForm = ({ gameId }: UsePlayCreateFormProps) => {
  const { data: currentUserPlayerId } = useGetCurrentUserPlayer();
  const resolver =
    useYupValidationResolver<PlayCreateFormData>(validationSchema);
  const { control, setValue, ...form } = useForm<PlayCreateFormData>({
    defaultValues,
    resolver,
  });
  const { fields, prepend, ...playersFieldArray } = useFieldArray({
    control,
    name: 'players',
  });

  useEffect(() => {
    setValue('gameId', gameId, { shouldValidate: true });
  }, [gameId, setValue]);

  useEffect(() => {
    !!currentUserPlayerId &&
      fields.length === 0 &&
      prepend({ playerId: currentUserPlayerId, isWinner: false });
  }, [currentUserPlayerId, prepend, fields.length]);

  return {
    control,
    setValue,
    ...form,
    playersFieldArray: { fields, prepend, ...playersFieldArray },
  };
};

const useGetCurrentUserPlayer = () => {
  const { id } = useAuthentication();
  const { data: { players } = {} } = usePlayCreateFormQuery();
  return { data: players?.find(({ userId }) => userId === id)?.id };
};
