import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { initialAuth } from '@services/AuthService';

import AppContainer from './AppContainer';
import styles from './styles';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    initialAuth(dispatch);
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
