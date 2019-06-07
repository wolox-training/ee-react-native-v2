import React from 'react';
import { View } from 'react-native';
// TODO: bring these books from api request if needed later in training
import BookList from '@components/BookList';
import styles from './styles';

import { books } from '../books.js';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookList data={books}/>
      </View>
    );
  }
};

export default App;
