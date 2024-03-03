import { boardGameGeekApi } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGame = (id = '') => {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => boardGameGeekApi.getBoardGame(id),
    enabled: !!id,
  });
};
