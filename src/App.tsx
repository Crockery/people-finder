import React from 'react';

import { ReactComponent as Logo } from './assets/images/AirLogo.svg';

import { SearchBar } from './components/SearchBar';
import { PeopleList } from './PeopleList/PeopleList';

import './App.css';

export const App = React.memo(() => (
  <main className="app">
    <section className="app__logo">
      <figure>
        <Logo title="Air Logo" className="app__logo-image" />
      </figure>
    </section>
    <section className="app__content">
      <header>
        The Person Finder
      </header>
      <p className="app__description">
        If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!
      </p>
      <SearchBar />
      <PeopleList />
    </section>
  </main>
));

App.displayName = 'App';
