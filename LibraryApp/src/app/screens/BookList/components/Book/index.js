import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import PropTypes from 'prop-types';

import defaultPlaceholder from '../../../../assets/book_placeholder.png';

class Book extends Component {
  onPress = () => this.props.onPress(this.props.item);

  render() {
    const { item } = this.props;
    const { image_url: coverImg, title, author } = item;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image
          source={coverImg && {uri: coverImg} || defaultPlaceholder}
          style={styles.coverImage}
        />
        <View style={styles.rightContainer} >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

Book.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};

Book.defaultProps = {
  title: 'No title',
  author: 'No author'
}

export default Book;
