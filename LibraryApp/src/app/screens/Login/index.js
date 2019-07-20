import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPasswordValid, isEmailValid } from '@utils/validations';
import authActions from '@redux/auth/actions';
import withLoading from '@components/LoadingHOC';

import Login from './layout';
import { EMAIL_ERROR, PASSWORD_ERROR } from './constants';

class LoginContainer extends Component {
  state = {
    emailError: null,
    passwordError: null
  };

  onEmailChange = email => this.props.setEmail(email);

  onPasswordChange = password => this.props.setPassword(password);

  handleSubmit = () => {
    const { login, email, password } = this.props;

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
    const { authError, email, password, loginLoading } = this.props;
    return (
      <Login
        email={email}
        password={password}
        handleSubmit={this.handleSubmit}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        emailError={emailError}
        passwordError={passwordError}
        authError={authError}
        loading={loginLoading}
      />
    );
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  login: PropTypes.func,
  authError: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  loginLoading: PropTypes.bool
};

const mapStateToProps = store => ({
  authError: store.auth.authError,
  loading: store.auth.initialAuthLoading,
  email: store.auth.email,
  password: store.auth.password,
  loginLoading: store.auth.loading
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(authActions.login(email, password)),
  setEmail: email => dispatch(authActions.setEmail(email)),
  setPassword: password => dispatch(authActions.setPassword(password))
});

const LoginWithLoading = withLoading(LoginContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithLoading);
