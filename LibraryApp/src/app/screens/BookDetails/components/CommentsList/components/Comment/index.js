import React from 'react';
import { View, Text, Image } from 'react-native';
import { bookPropType } from '@propTypes/books';

import styles from './styles';

function Comment({ item }) {
  const { avatar, username, comment } = item;
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}

Comment.propTypes = {
  item: bookPropType
};

export default Comment;
