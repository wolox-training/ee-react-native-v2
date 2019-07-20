/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingHOC = Component => ({ loading, notFlex, ...props }) =>
  loading ? (
    <ActivityIndicator style={[styles.container, notFlex && styles.notFlex]} />
  ) : (
    <Component {...props} />
  );

export default LoadingHOC;
