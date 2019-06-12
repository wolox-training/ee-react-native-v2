import React from 'react';
import { View } from 'react-native';
// TODO: bring these books from api request if needed later in training
import Book from '@components/Book';

import { books } from '../books';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      {/* TODO: to send all books instead of one only */}
      <Book title={books[0].title} author={books[0].author} photo={books[2].image_url} />
    </View>
  );
}

export default App;
