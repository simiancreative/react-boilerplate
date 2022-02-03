import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { StateProvider } from 'store';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <StateProvider>
        <Router history={history}>{ui}</Router>
      </StateProvider>
    ),
    history
  };
}

export default renderWithRouter;
