import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import { isPasswordValid, isEmailValid } from '@utils/validations';

import Login from './layout';
import { EMAIL_ERROR, PASSWORD_ERROR } from './constants';

class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
    emailError: null,
    passwordError: null
  };

  onEmailChange = email => this.setState({ email });

  onPasswordChange = password => this.setState({ password });

  handleSubmit = () => {
    const { dispatch } = this.props.navigation;
    const { email, password } = this.state;
    const isValidEmail = isEmailValid(email);
    const isValidPassword = isPasswordValid(password);
    this.setState({
      emailError: isValidEmail ? null : EMAIL_ERROR,
      passwordError: isValidPassword ? null : PASSWORD_ERROR
    });
    return (
      isValidEmail &&
      isValidPassword &&
      dispatch(
        NavigationActions.navigate({
          routeName: Routes.Library
        })
      )
    );
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;
    return (
      <Login
        email={email}
        password={password}
        onSubmit={this.handleSubmit}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        emailError={emailError}
        passwordError={passwordError}
      />
    );
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  })
};

export default LoginContainer;
