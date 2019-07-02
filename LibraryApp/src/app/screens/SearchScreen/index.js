import React, { Component } from 'react';
import { View, ImageBackground, FlatList, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '@components/SearchBar';
import headerImg from '@assets/bc_nav_bar.png';
import Routes from '@constants/routes';
import Book from '@components/Book';

import styles from './styles';

class SearchScreen extends Component {
  state = {
    booksFiltered: []
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

  handleSearch = value => {
    const { books } = this.props;
    const booksFiltered = books.filter(this.searchTitle(value));
    this.setState({ booksFiltered });
  };

  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => <Book item={item} handleOnPress={this.goToDetails} />;

  render() {
    const { booksFiltered } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={headerImg} style={styles.headerImage}>
          <SearchBar containerStyles={styles.barContainerStyle} onSearch={this.handleSearch} />
        </ImageBackground>
        <FlatList
          data={booksFiltered}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          style={styles.booksContainer}
          ListEmptyComponent={<Text>NO HAY</Text>}
        />
      </View>
    );
  }
}

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  books: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      coverImg: PropTypes.string,
      editor: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.string
    }).isRequired
  )
};

const mapStateToProps = store => ({
  books: store.books.books
});

export default connect(mapStateToProps)(SearchScreen);
