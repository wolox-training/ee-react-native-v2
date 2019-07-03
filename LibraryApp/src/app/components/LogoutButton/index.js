import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '@components/CustomButton';
import authActions from '@redux/auth/actions';

import styles from './styles';

const LOGOUT_TEXT = 'LOGOUT';

class LogoutButton extends Component {
  handleLogout = () => this.props.dispatch(authActions.logout());

  render() {
    return (
      <CustomButton onPress={this.handleLogout} title={LOGOUT_TEXT} buttonStyles={styles.logoutButtonStyle} />
    );
  }
}

export default connect()(LogoutButton);
