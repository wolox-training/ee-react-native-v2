import * as AuthService from '@services/AuthService';
import { NavigationActions } from 'react-navigation';
import Routes from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  AUTH_INIT: 'AUTH_INIT'
};

const privateActionCreators = {
  loginSuccess: () => dispatch => {
    dispatch({ type: actions.LOGIN_SUCCESS });
    dispatch(
      NavigationActions.navigate({
        routeName: Routes.Library
      })
    );
  },
  loginFailure: problem => dispatch => {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: problem
    });
  },
  initWithStoredUser: () => async dispatch => {
    const tokens = await AuthService.getCurrentUser();
    if (!tokens.authenticated) {
      dispatch(
        NavigationActions.navigate({
          routeName: Routes.Login
        })
      );
    } else {
      await AuthService.setCurrentUser(tokens.headers);
      dispatch({ type: actions.AUTH_INIT });
      dispatch(
        NavigationActions.navigate({
          routeName: Routes.Library
        })
      );
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
  }
};

export default actionCreators;
