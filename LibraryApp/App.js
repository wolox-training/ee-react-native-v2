import React from 'react';

import App from './src/app';

if (__DEV__) {
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function index() {
  return <App />;
}
