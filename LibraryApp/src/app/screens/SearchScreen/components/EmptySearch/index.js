import React from 'react';
import { View, Text, Image } from 'react-native';

import searchIcon from './assets/ic_search@3x.png.png';
import styles from './styles';
import { SEARCH_TITLE, SEARCH_DESCRIPTION } from './constants';

function EmptySearch() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <Text style={styles.searchTitle}>{SEARCH_TITLE}</Text>
      <Text style={styles.searchDescription}>{SEARCH_DESCRIPTION}</Text>
    </View>
  );
}

export default EmptySearch;
