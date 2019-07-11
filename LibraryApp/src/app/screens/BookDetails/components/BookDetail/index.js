import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import defaultPlaceholder from '@assets/book_placeholder.png';
import CustomButton from '@components/CustomButton';
import RentButton from '@components/RentButton';
import { bookPropType } from '@propTypes/books';

import { ADD_TO_WISHLIST, UNAVAILABLE, AVAILABLE } from './constants';
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
            buttonStyles={styles.buttonsStyle}
            textStyles={styles.buttonTextStyle}
          />
          <RentButton buttonStyles={styles.buttonsStyle} textStyles={styles.buttonTextStyle} />
        </View>
      </View>
    );
  }
}

BookDetail.propTypes = {
  item: bookPropType
};

export default BookDetail;
