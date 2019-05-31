import React, { Component } from 'react';
import { View } from 'react-native';

// import BookList from './screens/BookList';
import AppContainer from './AppContainer';
import styles from './styles';

// const booksTest = require('../books.json');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
};

export default App;
