import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';

import App from './src/app';

if (__DEV__) import('./ReactotronConfig');

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
