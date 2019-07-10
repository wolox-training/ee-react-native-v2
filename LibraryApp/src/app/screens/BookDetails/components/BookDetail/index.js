import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';
import CustomButton from '@components/CustomButton';

import { ADD_TO_WISHLIST, RENT, UNAVAILABLE, AVAILABLE } from './constants';
import styles from './styles';

class BookDetail extends Component {
  render() {
    const { image: coverImage, title, author, year, genre, available } = this.props.item;
    return (
      <View style={styles.infoContainer}>
        <View style={styles.detailsContainer}>
          <Image
            source={coverImage ? { uri: coverImage.url } : defaultPlaceholder}
            style={styles.coverImage}
          />
          <ScrollView style={styles.rightContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={available ? styles.available : styles.unavailable}>
              {available ? AVAILABLE : UNAVAILABLE}
            </Text>
            <Text>{author}</Text>
            <Text>{year}</Text>
            <Text>{genre}</Text>
          </ScrollView>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            title={ADD_TO_WISHLIST}
            whiteTheme
            buttonStyles={styles.buttonsMargin}
            textStyles={styles.buttonTextStyle}
          />
          <CustomButton
            title={RENT}
            buttonStyles={styles.buttonsMargin}
            textStyles={styles.buttonTextStyle}
          />
        </View>
      </View>
    );
  }
}

BookDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    available: PropTypes.bool
  })
};

export default BookDetail;
