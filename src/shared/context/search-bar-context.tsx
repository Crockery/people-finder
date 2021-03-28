import React, { createContext, memo, useState, useCallback, useMemo } from 'react';
import { debounce } from 'mini-debounce';

interface ISearchBarContext {
    searchText: string;
    setSearchText: (text: string) => void;
    debouncedSetSearchText: (text: string) => void;
}

export const SearchBarContext = createContext<ISearchBarContext>({
  searchText: '',
  setSearchText: () => {},
  debouncedSetSearchText: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const SearchBarContextProvider = memo(({ children }: Props) => {
  const [searchText, setSearchTextState] = useState<string>('');

  const setSearchText = useCallback((text: string) => {
    setSearchTextState(text);
  }, []);

  const debouncedSetSearch = useMemo(() => debounce((text: string) => {
    setSearchText(text);
  }, 200), [setSearchText]);

  return (
    <SearchBarContext.Provider
      value={{
        searchText,
        setSearchText,
        debouncedSetSearchText: debouncedSetSearch
      }}
    >
      { children }
    </SearchBarContext.Provider>
  );
});

SearchBarContextProvider.displayName = 'SearchBarContextProvider';