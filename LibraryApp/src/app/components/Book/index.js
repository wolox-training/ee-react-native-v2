import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PropTypes from 'prop-types';

function Book({ title, author, photo }) {
  return (
    <View style={styles.container} >
      <Image
        source={photo && {uri: photo} || require('../../assets/book_placeholder.png')}
        style={styles.coverImage}
      />
      <View style={styles.rightContainer} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

/*
  function ProgressBar({ currentStep, totalSteps, progressBarStyles, viewStyles, width }) {
  const totalProgress = (currentStep * width) / totalSteps;
  return (
    <View style={[styles.container, viewStyles, { width }]}>
      <View style={[styles.progress, { width: totalProgress }, progressBarStyles]} />
    </View>
  );
}
*/

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

/*
        <Image
          source={require('/react-native/img/favicon.png')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
*/
