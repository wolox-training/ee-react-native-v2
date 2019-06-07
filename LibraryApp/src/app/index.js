import React from 'react';
import { View } from 'react-native';
// TODO: bring these books from api request if needed later in training
import BookList from '@components/BookList';

import { books } from '../books';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <BookList data={books} />
    </View>
  );
}

export default App;
