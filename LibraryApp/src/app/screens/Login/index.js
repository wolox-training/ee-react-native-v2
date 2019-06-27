import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPasswordValid, isEmailValid } from '@utils/validations';
import loginActions from '@redux/login/actions';

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
    const { login } = this.props;
    const { email, password } = this.state;
    const isValidEmail = isEmailValid(email);
    const isValidPassword = isPasswordValid(password);
    this.setState({
      emailError: isValidEmail ? null : EMAIL_ERROR,
      passwordError: isValidPassword ? null : PASSWORD_ERROR
    });
    return isValidEmail && isValidPassword && login(email, password);
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;
    const { authError } = this.props;
    return (
      <Login
        email={email}
        password={password}
        onSubmit={this.handleSubmit}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        emailError={emailError}
        passwordError={passwordError}
        authError={authError}
      />
    );
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }),
  login: PropTypes.func,
  authError: PropTypes.string
};

const mapStateToProps = store => ({
  authError: store.login.authError
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginActions.login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
