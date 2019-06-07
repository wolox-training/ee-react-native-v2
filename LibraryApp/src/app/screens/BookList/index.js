import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import Book from './components/Book';
import Routes from '../../../constants/routes';

import booksTest from '../../../books.json';

class BookList extends Component {
  goToDetails = item => {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: Routes.BookDetail,
        params: { item }
      })
    );
  }

  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => (
    <Book
      item={item}
      onPress={this.goToDetails}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={booksTest}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default BookList;
