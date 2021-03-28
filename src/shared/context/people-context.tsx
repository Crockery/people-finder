import React, { createContext, memo, useMemo, useContext } from 'react';

import PeopleData from '../../data/people.json';
import { SearchBarContext } from './search-bar-context';
import { IPerson } from '../typings/people';

export interface IPeopleContext {
  people: IPerson[]
}

export const PeopleContext = createContext<IPeopleContext>({
  people: [],
});

interface Props {
  children: React.ReactNode
}

export const PeopleContextProvider = memo(({ children }: Props) => {
  const { searchText } = useContext(SearchBarContext);

  const peopleData = useMemo<IPerson[]>(() => PeopleData, []);

  const filteredPeople = useMemo<IPerson[]>(
    () => peopleData.filter(
      person => person.name.toLowerCase().includes(searchText.toLowerCase())
    ),
    [peopleData, searchText],
  );

  return (
    <PeopleContext.Provider
      value={{
        people: filteredPeople,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
});

PeopleContextProvider.displayName = 'PeopleContextProvider';