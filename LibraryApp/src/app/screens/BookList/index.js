import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import withLoading from '@components/LoadingHOC';
import booksActions from '@redux/books/actions';
import Book from '@components/Book';
import { bookPropType } from '@propTypes/books';

import styles from './styles';

class BookList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(booksActions.getBooks());
  }

  goToDetails = item => {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: Routes.BookDetails,
        params: { item }
      })
    );
  };

  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => <Book item={item} handleOnPress={this.goToDetails} />;

  render() {
    const { books } = this.props;
    return (
      <FlatList
        data={books}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        style={styles.container}
      />
    );
  }
}

BookList.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  books: PropTypes.arrayOf(bookPropType)
};

const mapStateToProps = store => ({
  loading: store.auth.loading,
  books: store.books.books
});

const BookListWithLoading = withLoading(BookList);

export default connect(mapStateToProps)(BookListWithLoading);
