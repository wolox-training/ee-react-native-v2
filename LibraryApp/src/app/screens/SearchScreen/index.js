import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import { bookPropType } from '@propTypes/books';

import SearchScreen from './layout';

class SearchScreenContainer extends Component {
  state = {
    booksFiltered: [],
    searchString: ''
  };

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
    const { books } = this.props;
    const booksFiltered = [...books].filter(this.searchTitle(value)).sort(this.compareBookTitle);
    this.setState({ booksFiltered, searchString: value });
  };

  handleClose = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { booksFiltered, searchString } = this.state;
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
  books: PropTypes.arrayOf(bookPropType).isRequired
};

const mapStateToProps = store => ({
  books: store.books.books
});

export default connect(mapStateToProps)(SearchScreenContainer);
