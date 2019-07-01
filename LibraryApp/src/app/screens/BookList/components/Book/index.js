import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';

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
  }).isRequired,
  handleOnPress: PropTypes.func
};

/*
  {
      "id": 57794,
      "author": "Rufus Bartoletti",
      "title": "Dying of the Light",
      "image": "http://bartolettihyatt.io/kasi",
      "editor": "Flame Tree Publishing",
      "year": "1962",
      "genre": "Short story",
      "created_at": "2019-03-19T14:59:38.835Z",
      "updated_at": "2019-03-19T14:59:38.835Z",
      "rents": []
    }
*/

/*
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
*/

export default Book;
