import React, { memo } from 'react';

import { IPerson } from '../../shared/typings/people';

import './Person.css';

type Props = Omit<IPerson, 'email'>

const PersonInternal = ({
  name,
  avatar,
  description
}: Props) => (
  <article className="person">
    <div className="person__avatar">
      <img
        src={avatar}
        alt={name}
      />
    </div>
    <div className="person__details">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </article>
);

export const Person = memo(PersonInternal, (props, prevProps) => props.id === prevProps.id);

Person.displayName = 'Person';