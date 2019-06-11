import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { shuffleArray } from '@utils/arrayUtils';

import styles from './styles';
import CommentsList from './components/CommentsList';
import { comments } from './comments';
import BookDetail from './components/BookDetail';

class BookDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.title : 'Unknown title for the selected book'
    };
  };

  render() {
    const { item } = this.props.navigation.state.params;
    const shuffledComments = shuffleArray(comments);
    return (
      <View style={styles.container}>
        <View>
          <BookDetail item={item} />
        </View>
        <View style={styles.commentsContainer}>
          <CommentsList comments={shuffledComments} />
        </View>
      </View>
    );
  }
}

BookDetails.propTypes = {
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
          image_url: PropTypes.string,
          available: PropTypes.bool
        })
      })
    })
  })
};

export default BookDetails;
