import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

import BookVertical from './components/BookVertical';
import profileImage from './assets/ninjaTurtle.jpg';
import styles from './styles';
import {
  PROFILE_NAME,
  PROFILE_EMAIL,
  PROFILE_BOOKS_RENTED,
  PROFILE_MEMBER_SINCE,
  LAST_BOOKS_VIEWED
} from './constants';

class ProfileScreen extends Component {
  renderItem = ({ item }) => {
    return <BookVertical item={item} />;
  };

  render() {
    const { lastViewedBooks } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={styles.rightInfoContainer}>
            <Text style={[styles.textStyle, styles.titleStyle]}>{PROFILE_NAME}</Text>
            <Text style={[styles.textStyle, styles.emailStyle]}>{PROFILE_EMAIL}</Text>
            <Text style={styles.textStyle}>{PROFILE_BOOKS_RENTED}</Text>
            <Text style={styles.textStyle}>{PROFILE_MEMBER_SINCE}</Text>
          </View>
        </View>
        <View style={styles.recentBooksContainer}>
          <Text style={styles.carouselTitle}>{LAST_BOOKS_VIEWED}</Text>
          <Carousel data={lastViewedBooks} renderItem={this.renderItem} sliderWidth={300} itemWidth={200} />
        </View>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  lastViewedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      coverImg: PropTypes.string,
      editor: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.string
    }).isRequired
  )
};

const booksSelector = store => store.books.books;

const lastThreeBooks = createSelector(
  booksSelector,
  books => books.filter((book, index) => index >= 7)
);

const mapStateToProps = store => ({
  lastViewedBooks: lastThreeBooks(store)
});

export default connect(mapStateToProps)(ProfileScreen);
