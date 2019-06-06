import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PropTypes from 'prop-types';

import bookPlaceholder from '../../../../assets/book_placeholder.png'

function Book({ title, author, photo }) {
  return (
    <View style={styles.container}>
      <Image
        source={photo && {uri: photo} || bookPlaceholder }
        style={styles.coverImage}
      />
      <View style={styles.rightContainer} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  photo: PropTypes.string
};

Book.defaultProps = {
  title: 'No title',
  author: 'No author'
}

export default Book;
