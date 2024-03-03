import { boardGameGeekApi } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGameSearch = (text = '') => {
  return useQuery({
    queryKey: ['gameSearch', text],
    queryFn: () => boardGameGeekApi.searchBoardGame(text),
    enabled: !!text,
  });
};
