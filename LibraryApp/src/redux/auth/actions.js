import * as AuthService from '@services/AuthService';
import { NavigationActions } from 'react-navigation';
import { createTypes, completeTypes, withSuccess, withPostFailure } from 'redux-recompose';
import Routes from '@constants/routes';

const targets = {
  INITIAL_AUTH: 'initialAuth',
  LOGIN: 'login'
};

export const actions = createTypes(completeTypes(['LOGIN', 'AUTH_INIT'], ['LOGOUT']), '@@AUTH');

const actionCreators = {
  initialLoading: () => ({
    type: actions.AUTH_INIT,
    target: targets.INITIAL_AUTH,
    service: AuthService.getCurrentUser,
    injections: [
      withSuccess(async (dispatch, response) => {
        await AuthService.setCurrentUser(response.headers);
        dispatch(
          NavigationActions.navigate({
            routeName: Routes.Library
          })
        );
        dispatch({ type: actions.AUTH_INIT_SUCCESS, target: targets.INITIAL_AUTH });
      }),
      withPostFailure(dispatch => {
        dispatch(
          NavigationActions.navigate({
            routeName: Routes.Login
          })
        );
      })
    ]
  }),
  login: (email, password) => ({
    type: actions.LOGIN,
    target: targets.LOGIN,
    service: AuthService.login,
    payload: { email, password },
    injections: [
      withSuccess(async (dispatch, response) => {
        const { headers } = response;
        const token = headers['access-token'];
        const { client, uid } = headers;
        await AuthService.setCurrentUser({ token, client, uid });
        dispatch(
          NavigationActions.navigate({
            routeName: Routes.Library
          })
        );
        dispatch({ type: actions.LOGIN_SUCCESS, target: targets.LOGIN });
      })
    ]
  }),
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
