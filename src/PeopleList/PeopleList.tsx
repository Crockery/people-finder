import React, { memo, useContext } from 'react';

import { PeopleContext } from '../shared/context/people-context';

import { Person } from './components/Person';

import './PeopleList.css';

export const PeopleList = memo(() => {
  const { people } = useContext(PeopleContext);
  return (
    <ul className="people-list">
      {people.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          description={person.description}
          avatar={person.avatar}
          id={person.id}
        />
      ))}
    </ul>
  );
});

PeopleList.displayName = 'PeopleList';