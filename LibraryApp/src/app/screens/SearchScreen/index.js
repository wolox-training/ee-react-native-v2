import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';
import Routes from '@constants/routes';
import bookActions from '@redux/books/actions';

import SearchScreen from './layout';

class SearchScreenContainer extends Component {
  goToDetails = item => {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: Routes.BookDetails,
        params: { item }
      })
    );
  };

  searchTitle = value => book => value !== '' && book.title.toLowerCase().includes(value.toLowerCase());

  compareBookTitle = (bookA, bookB) => {
    if (bookA.title < bookB.title) return -1;
    if (bookB.title < bookA.title) return 1;
    return 0;
  };

  handleSearch = value => {
    const { dispatch } = this.props;
    dispatch(bookActions.setSearchString(value));
  };

  handleClose = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { booksFiltered, searchString } = this.props;
    const searchNotEmpty = searchString.length !== 0;
    return (
      <SearchScreen
        onSearch={this.handleSearch}
        onClose={this.handleClose}
        goToDetails={this.goToDetails}
        booksFiltered={booksFiltered}
        searchNotEmpty={searchNotEmpty}
      />
    );
  }
}

SearchScreenContainer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  booksFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      coverImg: PropTypes.string,
      editor: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.string
    }).isRequired
  ),
  searchString: PropTypes.string
};

const bookSelector = store => store.books.books;

const searchStringSelector = store => store.books.searchString;

const searchTitle = searchString => book =>
  searchString !== '' && book.title.toLowerCase().includes(searchString.toLowerCase());

const compareBookTitle = (bookA, bookB) => {
  if (bookA.title < bookB.title) return -1;
  if (bookB.title < bookA.title) return 1;
  return 0;
};

const makeGetFilteredBooks = createSelector(
  bookSelector,
  searchStringSelector,
  (books, searchString) =>
    Immutable(Immutable.asMutable(books.filter(searchTitle(searchString))).sort(compareBookTitle))
);

const mapStateToProps = store => ({
  books: bookSelector(store),
  searchString: searchStringSelector(store),
  booksFiltered: makeGetFilteredBooks(store)
});

const SearchScreenConnected = connect(mapStateToProps)(SearchScreenContainer);

SearchScreenConnected.navigationOptions = {
  header: null
};

export default SearchScreenConnected;
