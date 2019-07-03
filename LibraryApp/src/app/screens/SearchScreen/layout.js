import React, { Component } from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Book from '@components/Book';
import SearchBar from '@components/SearchBar';
import headerImg from '@assets/bc_nav_bar.png';

import EmptySearch from './components/EmptySearch';
import styles from './styles';

class SearchScreen extends Component {
  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => <Book item={item} handleOnPress={this.props.goToDetails} />;

  render() {
    const { booksFiltered, onSearch, onClose, searchNotEmpty } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground source={headerImg} style={styles.headerImage}>
          <SearchBar
            containerStyles={styles.barContainerStyle}
            onSearch={onSearch}
            onClose={onClose}
            searchNotEmpty={searchNotEmpty}
          />
        </ImageBackground>
        <FlatList
          data={booksFiltered}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          style={styles.booksContainer}
          ListEmptyComponent={EmptySearch}
        />
      </View>
    );
  }
}

SearchScreen.propTypes = {
  booksFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      coverImg: PropTypes.string,
      editor: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.string
    })
  ),
  onSearch: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  goToDetails: PropTypes.func,
  searchNotEmpty: PropTypes.bool
};

SearchScreen.defaultProps = {
  booksFiltered: []
};

export default SearchScreen;
