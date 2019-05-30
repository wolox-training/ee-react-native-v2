import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import Book from '../Book';

class BookList extends Component {
  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => (
    <Book
      title={item.title}
      author={item.author}
      photo={item.image_url}
    />
  );

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default BookList;
