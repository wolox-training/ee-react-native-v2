import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { bookPropType } from '@propTypes/books';

import styles from './styles';
import CommentsList from './components/CommentsList';
import { comments } from './comments';
import BookDetail from './components/BookDetail';

const UNKNOWN_TITLE = 'Unknown title for the selected book';

class BookDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.title : UNKNOWN_TITLE
    };
  };

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <BookDetail item={item} />
        <CommentsList comments={comments} />
      </View>
    );
  }
}

BookDetails.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: bookPropType
      })
    })
  })
};

export default BookDetails;
