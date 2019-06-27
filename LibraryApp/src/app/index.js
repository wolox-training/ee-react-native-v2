import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '@redux/store';

import AppContainer from './AppContainer';
import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </View>
  );
}

export default App;
