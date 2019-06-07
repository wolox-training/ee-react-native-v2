import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import defaultPlaceholder from '../../../../assets/book_placeholder.png';

import styles from './styles';

class Book extends Component {
  onPress = () => this.props.handleOnPress(this.props.item);

  render() {
    const { item } = this.props;
    const { image_url: coverImg, title, author } = item;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={(coverImg && { uri: coverImg }) || defaultPlaceholder} style={styles.coverImage} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    coverImg: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
    publisher: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
  }).isRequired,
  handleOnPress: PropTypes.func
};

export default Book;
