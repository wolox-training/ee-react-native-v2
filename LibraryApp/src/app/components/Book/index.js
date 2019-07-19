import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';
import { bookPropType } from '@propTypes/books';

import styles from './styles';

const MAX_OPACITY = 1;
const ANIM_DURATION = 100;
const BASE_DELAY = 100;

class Book extends Component {
  state = {
    opacityAnim: new Animated.Value(0),
    loading: true
  };

  componentDidMount() {
    const { index } = this.props;
    const delayTime = BASE_DELAY * (index + 1);
    setTimeout(() => {
      this.setState({ loading: false });
      Animated.timing(this.state.opacityAnim, {
        toValue: MAX_OPACITY,
        duration: ANIM_DURATION
      }).start();
    }, delayTime);
  }

  onPress = () => this.props.handleOnPress(this.props.item);

  render() {
    const { item, animated } = this.props;
    const { image: coverImg, title, author } = item;
    const { opacityAnim, loading } = this.state;
    if (loading) return null;
    return (
      <Animated.View style={{ opacity: animated ? opacityAnim : MAX_OPACITY }}>
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
  item: bookPropType.isRequired,
  handleOnPress: PropTypes.func,
  index: PropTypes.number,
  animated: PropTypes.bool
};

Book.defaultProps = {
  animated: false
};

export default Book;
