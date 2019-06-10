import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import defaultPlaceholder from '@assets/book_placeholder.png';
import CustomButton from '@components/CustomButton';

import styles from './styles';

class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.title : 'Unknown title for the selected book'
    };
  };

  render() {
    const { item } = this.props.navigation.state.params;
    const { image_url: coverImage, title, author, year, genre } = item;
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Image
            source={(coverImage && { uri: coverImage }) || defaultPlaceholder}
            style={styles.coverImage}
          />
          <ScrollView style={styles.rightContainer}>
            <Text style={styles.title}>{title}</Text>
            {/* TODO: Make availability updatable */}
            <Text style={styles.availability}>Available</Text>
            <Text>{author}</Text>
            <Text>{year}</Text>
            <Text>{genre}</Text>
          </ScrollView>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            title="Add to wishlist"
            whiteTheme
            buttonStyles={styles.buttonsMargin}
            textStyles={styles.buttonTextStyle}
          />
          <CustomButton
            title="Rent"
            buttonStyles={styles.buttonsMargin}
            textStyles={styles.buttonTextStyle}
          />
        </View>
      </View>
    );
  }
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: PropTypes.shape({
          id: PropTypes.number,
          author: PropTypes.string,
          title: PropTypes.string,
          genre: PropTypes.string,
          publisher: PropTypes.string,
          year: PropTypes.string,
          image_url: PropTypes.string
        })
      })
    })
  })
};

export default BookDetail;
