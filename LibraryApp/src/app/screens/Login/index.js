import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';

import Login from './layout';

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  };

  onEmailChange = email => this.setState({ email });

  onPasswordChange = password => this.setState({ password });

  handleSubmit = () => {
    const { dispatch } = this.props.navigation;
    // TENGO EL CONTENIDO DE LOS INPUTS VIEJAAA
    console.log({ ...this.state });
    return dispatch(
      NavigationActions.navigate({
        routeName: Routes.Library
      })
    );
  };

  render() {
    const { email, password } = this.state;
    return (
      <Login
        email={email}
        password={password}
        onSubmit={this.handleSubmit}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
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
