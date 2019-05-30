import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './components/BookList';
import styles from './styles';

const booksTest = require('../books.json');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookList data={booksTest}/>
      </View>
    );
  }
};

export default App;
