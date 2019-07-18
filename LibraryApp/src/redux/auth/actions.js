import * as AuthService from '@services/AuthService';
import { NavigationActions } from 'react-navigation';
import Routes from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  AUTH_INIT: 'AUTH_INIT',
  AUTH_INIT_SUCCESS: 'AUTH_INIT_SUCCESS',
  AUTH_INIT_FAILURE: 'AUTH_INIT_FAILURE',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD'
};

const privateActionCreators = {
  loginSuccess: () => dispatch => {
    dispatch(
      NavigationActions.navigate({
        routeName: Routes.Library
      })
    );
    dispatch({ type: actions.LOGIN_SUCCESS });
  },
  loginFailure: problem => dispatch => {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: problem
    });
  },
  initWithStoredUser: () => async dispatch => {
    dispatch({ type: actions.AUTH_INIT });
    const tokens = await AuthService.getCurrentUser();
    if (!tokens.authenticated) {
      dispatch({ type: actions.AUTH_INIT_FAILURE });
      dispatch(
        NavigationActions.navigate({
          routeName: Routes.Login
        })
      );
    } else {
      await AuthService.setCurrentUser(tokens.headers);
      dispatch(
        NavigationActions.navigate({
          routeName: Routes.Library
        })
      );
      dispatch({ type: actions.AUTH_INIT_SUCCESS });
    }
  }
};

const actionCreators = {
  initialLoading: () => dispatch => {
    dispatch(privateActionCreators.initWithStoredUser());
  },
  login: (email, password) => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await AuthService.login(email, password);
    if (response.ok) {
      const { headers } = response;
      const token = headers['access-token'];
      const { client, uid } = headers;
      await AuthService.setCurrentUser({ token, client, uid });
      dispatch(privateActionCreators.loginSuccess());
    } else {
      dispatch(privateActionCreators.loginFailure(response.problem));
    }
  },
  logout: () => dispatch => {
    dispatch({ type: actions.LOGOUT });
    dispatch(
      NavigationActions.navigate({
        routeName: Routes.Login
      })
    );
    AuthService.logout();
  },
  setEmail: email => dispatch => {
    dispatch({
      type: actions.SET_EMAIL,
      payload: email
    });
  },
  setPassword: password => dispatch => {
    dispatch({
      type: actions.SET_PASSWORD,
      payload: password
    });
  }
};

export default actionCreators;
