import React, { createContext, memo, useMemo } from 'react';

import PeopleData from '../../data/people.json';

import { Person } from '../typings/people';

export interface IPeopleContext {
  people: Person[]
}

export const PeopleContext = createContext<IPeopleContext>({
  people: [],
});

interface Props {
  children: React.ReactNode
}

export const PeopleContextProvider = memo(({ children }: Props) => {
  const peopleData = useMemo<Person[]>(() => PeopleData, []);

  const filteredPeople = useMemo<Person[]>(() => peopleData, [peopleData]);

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