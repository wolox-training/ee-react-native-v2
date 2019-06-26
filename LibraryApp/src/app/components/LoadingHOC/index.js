/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingHOC = Component => ({ loading, ...rest }) =>
  loading ? <ActivityIndicator style={styles.container} /> : <Component {...rest} />;

export default LoadingHOC;
