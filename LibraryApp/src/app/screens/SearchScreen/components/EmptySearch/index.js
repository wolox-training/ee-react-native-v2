import React from 'react';
import { View, Text, Image } from 'react-native';

import searchIcon from './assets/ic_search@3x.png.png';
import styles from './styles';

function EmptySearch() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <Text style={styles.searchTitle}>Search in Wbooks</Text>
      <Text style={styles.searchDescription}>Find your favourite writers and books!</Text>
    </View>
  );
}

export default EmptySearch;
