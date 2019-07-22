import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPasswordValid, isEmailValid } from '@utils/validations';
import authActions from '@redux/auth/actions';
import withLoading from '@components/LoadingHOC';

import Login from './layout';
import { EMAIL_ERROR, PASSWORD_ERROR, EMAIL_FIELD, PASSWORD_FIELD } from './constants';

class LoginContainer extends Component {
  state = {
    emailError: null,
    passwordError: null
  };

  handleSubmit = values => {
    const { login } = this.props;
    const email = values[EMAIL_FIELD];
    const password = values[PASSWORD_FIELD];
    const isValidEmail = isEmailValid(email);
    const isValidPassword = isPasswordValid(password);
    this.setState({
      emailError: isValidEmail ? null : EMAIL_ERROR,
      passwordError: isValidPassword ? null : PASSWORD_ERROR
    });
    return isValidEmail && isValidPassword && login(email, password);
  };

  render() {
    const { emailError, passwordError } = this.state;
    const { loginError } = this.props;
    return (
      <Login
        onSubmit={this.handleSubmit}
        emailError={emailError}
        passwordError={passwordError}
        loginError={loginError}
      />
    );
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  login: PropTypes.func,
  loginError: PropTypes.string
};

const mapStateToProps = store => ({
  loginError: store.auth.loginError,
  loading: store.auth.initialAuthLoading
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(authActions.login(email, password))
});

const LoginWithLoading = withLoading(LoginContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithLoading);
