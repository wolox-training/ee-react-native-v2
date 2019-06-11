import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Comment from './components/Comment';

class CommentsList extends Component {
  renderItem = ({ item }) => {
    return <Comment item={item} />;
  };

  keyExtractor = ({ id }) => id;

  render() {
    const { comments } = this.props;
    return (
      <View style={styles.container}>
        <FlatList data={comments} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.number,
      comment: PropTypes.string
    })
  )
};

export default CommentsList;
