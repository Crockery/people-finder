import React, { memo, useContext, useCallback, useState } from 'react';

import { SearchBarContext } from '../shared/context/search-bar-context';

import { ReactComponent as MagnifyingGlass } from '../assets/images/Magnifiying.svg';
import { ReactComponent as Close } from '../assets/images/Close.svg';

import './SearchBar.css';

export const SearchBar = memo(() => {
  const { searchText, setSearchText, debouncedSetSearchText } = useContext(SearchBarContext);
  const [localSearchText, setLocalSearchText] = useState<string>(searchText);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setLocalSearchText(text);
    debouncedSetSearchText(text);
  }, [debouncedSetSearchText]);

  const clearSearch = useCallback(() => {
    setLocalSearchText('');
    setSearchText('');
  }, [setSearchText]);

  return (
    <section className="search-bar">
      <div className="search-bar__wrapper">
        <figure className="search-bar__icon">
          <MagnifyingGlass title="Search" />
        </figure>
        <input
          value={localSearchText}
          placeholder="Search in Air HQ"
          onChange={onChange}
          type="text"
        />
        <div className="search-bar__clear-button-wrapper">
          <button
            onClick={clearSearch}
            type="button"
            className="search-bar__clear-button"
          >
            <Close title="Close" />
          </button>
        </div>
      </div>
    </section>
  );
});

SearchBar.displayName = 'SearchBar';