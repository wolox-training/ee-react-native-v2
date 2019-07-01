import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import authActions from '@redux/auth/actions';

import AppContainer from './AppContainer';
import styles from './styles';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authActions.initialLoading());
  }

  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

export default connect()(App);
