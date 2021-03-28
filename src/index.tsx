import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { PeopleContextProvider } from './shared/context/people-context';
import { SearchBarContextProvider } from './shared/context/search-bar-context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SearchBarContextProvider>
      <PeopleContextProvider>
        <App />
      </PeopleContextProvider>
    </SearchBarContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
