import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import placeholderCover from '@assets/book_placeholder.png';

import styles from './styles';

function Book({ title, author, photo }) {
  return (
    <View style={styles.container}>
      <Image source={photo ? { uri: photo } : placeholderCover} style={styles.coverImage} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  author: PropTypes.string,
  photo: PropTypes.string,
  title: PropTypes.string
};

Book.defaultProps = {
  author: 'Unknown author',
  title: 'Unknown title'
};

export default Book;
