import debounce from 'lodash.debounce';
import { useCallback, useMemo, useState } from 'react';

export const useDebounceSearch = (minSearchCharacter = 3, timeout = 1000) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = useCallback(
    (text: string) => {
      text.length >= minSearchCharacter && setSearchText(text);
    },
    [minSearchCharacter]
  );

  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, timeout),
    [handleSearch, timeout]
  );

  return { searchText, onSearch: debouncedHandleSearch };
};
