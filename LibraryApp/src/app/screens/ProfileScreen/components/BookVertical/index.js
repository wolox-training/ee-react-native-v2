import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class BookVertical extends Component {
  render() {
    const { item } = this.props;
    const { image, title, author } = item;
    return (
      <View style={styles.container}>
        <Image source={{ uri: image.url }} style={styles.image} />
        <Text>{title}</Text>
        <Text>{author}</Text>
      </View>
    );
  }
}

BookVertical.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    coverImg: PropTypes.shape({
      url: PropTypes.string
    }),
    genre: PropTypes.string,
    id: PropTypes.number,
    publisher: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
  }).isRequired
};

export default BookVertical;
