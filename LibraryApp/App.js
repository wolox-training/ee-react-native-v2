import React from 'react';

import App from './src/app';

if (__DEV__) import('./ReactotronConfig');

export default function index() {
  return <App />;
}
