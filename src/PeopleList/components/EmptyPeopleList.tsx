import React, { memo } from 'react';

import './EmptyPeopleList.css';

export const EmptyPeopleList = memo(() => (
  <p className="empty-people-list">
      No results found matching your search :(
  </p>
));
