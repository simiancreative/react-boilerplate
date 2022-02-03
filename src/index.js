import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './views/app';
import { StateProvider } from 'store';

function Entry() {
  return (
    <Suspense fallback="loading">
      <StateProvider>
        <App />
      </StateProvider>
    </Suspense>
  );
}

ReactDOM.render(<Entry />, document.getElementById('root'));
