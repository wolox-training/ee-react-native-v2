import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';
import { bookPropType } from '@propTypes/books';

import styles from './styles';

class Book extends Component {
  onPress = () => this.props.handleOnPress(this.props.item);

  render() {
    const { item } = this.props;
    const { image: coverImg, title, author } = item;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={(coverImg && { uri: coverImg.url }) || defaultPlaceholder} style={styles.coverImage} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  item: bookPropType.isRequired,
  handleOnPress: PropTypes.func
};

export default Book;
