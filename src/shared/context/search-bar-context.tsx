import React, { createContext, memo, useState, useCallback } from 'react';
import { debounce } from 'mini-debounce'

interface ISearchBarContext {
    searchText: string;
    setSearchText: (text: string) => void;
}

export const SearchBarContext = createContext<ISearchBarContext>({
  searchText: '',
  setSearchText: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const SearchBarContextProvider = memo(({ children }: Props) => {
  const [searchText, setSearchTextState] = useState<string>('');

  const setSearchText = useCallback((text: string) => {
    setSearchTextState(text);
  }, []);

  const debouncedSetSearch = debounce((text: string) => {
    setSearchText(text);
  }, 200);

  return (
    <SearchBarContext.Provider
      value={{
        searchText,
        setSearchText: debouncedSetSearch,
      }}
    >
      { children }
    </SearchBarContext.Provider>
  );
});
