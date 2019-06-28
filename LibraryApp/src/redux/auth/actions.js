import {
  login as loginService,
  setCurrentUser as setCurrentUserStorage,
  logout as logoutService
} from '@services/AuthService';
import { NavigationActions } from 'react-navigation';
import Routes from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  INIT_STORED_USER: 'INIT_STORED_USER'
};

const privateActionCreators = {
  loginSuccess: () => dispatch => {
    dispatch({
      type: actions.LOGIN_SUCCESS
    });
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
  initWithStoredUser: () => dispatch => {
    dispatch({ type: actions.INIT_STORED_USER });
    dispatch(
      NavigationActions.navigate({
        routeName: Routes.Library
      })
    );
  },
  logoutAndNavigate: () => async dispatch => {
    dispatch({ type: actions.LOGOUT });
    dispatch(
      NavigationActions.navigate({
        routeName: Routes.Login
      })
    );
  }
};

const actionCreators = {
  initRemembered: () => dispatch => {
    dispatch(privateActionCreators.initWithStoredUser());
  },
  login: (email, password) => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await loginService(email, password);
    if (response.ok) {
      const { headers } = response;
      const token = headers['access-token'];
      const { client, uid } = headers;
      await setCurrentUserStorage(token, client, uid);
      dispatch(privateActionCreators.loginSuccess());
    } else {
      dispatch(privateActionCreators.loginFailure(response.data.errors[0]));
    }
  },
  logout: () => async dispatch => {
    dispatch(privateActionCreators.logoutAndNavigate());
    await logoutService();
  }
};

export default actionCreators;
