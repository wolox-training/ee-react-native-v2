import React, { Component } from 'react';
import { View } from 'react-native';

import Book from './components/Book';
import * as books from '../books.json';
import styles from './styles';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Book title={books[0].title} author={books[0].author} photo={books[0].image_url}/>
      </View>
    );
  }
};

export default App;
