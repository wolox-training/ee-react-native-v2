/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingHOC = (Component, flex) => ({ loading, ...props }) =>
  loading ? <ActivityIndicator style={[styles.container, flex && styles.flex]} /> : <Component {...props} />;

export default LoadingHOC;
