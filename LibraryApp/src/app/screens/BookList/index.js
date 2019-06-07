import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import { books } from '@directory/books';

import styles from './styles';
import Book from './components/Book';

class BookList extends Component {
  goToDetails = item => {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: Routes.BookDetail,
        params: { item }
      })
    );
  };

  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => <Book item={item} handleOnPress={this.goToDetails} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={books} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

BookList.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  })
};

export default BookList;
