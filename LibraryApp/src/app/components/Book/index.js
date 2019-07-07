import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';

import styles from './styles';

const MAX_OPACITY = 1;
const MAX_INDEX = 9;
const MAX_BOOKS = 10;
const ANIM_DURATION = 2000;

class Book extends Component {
  state = {
    opacityAnim: new Animated.Value(0)
  };

  componentDidMount() {
    const { index } = this.props;
    const maxOpacity = MAX_OPACITY - (MAX_INDEX - index) / MAX_BOOKS;
    Animated.timing(this.state.opacityAnim, {
      toValue: maxOpacity,
      duration: ANIM_DURATION
    }).start();
  }

  onPress = () => this.props.handleOnPress(this.props.item);

  render() {
    const { item } = this.props;
    const { image: coverImg, title, author } = item;
    const { opacityAnim } = this.state;
    return (
      <Animated.View style={{ opacity: opacityAnim }}>
        <TouchableOpacity style={styles.container} onPress={this.onPress}>
          <Image
            source={(coverImg && { uri: coverImg.url }) || defaultPlaceholder}
            style={styles.coverImage}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
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
  handleOnPress: PropTypes.func,
  index: PropTypes.number
};

export default Book;
