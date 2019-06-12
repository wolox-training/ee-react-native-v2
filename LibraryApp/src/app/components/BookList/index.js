import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Book from './components/Book';

class BookList extends Component {
  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => <Book title={item.title} author={item.author} photo={item.image_url} />;

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        style={styles.container}
      />
    );
  }
}

BookList.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
  })
};

export default BookList;
