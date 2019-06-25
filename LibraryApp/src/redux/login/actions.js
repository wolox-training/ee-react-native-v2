import { login as loginService } from '@services/LoginService';
import { NavigationActions } from 'react-navigation';
import Routes from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

const privateActionCreators = {
  loginSuccess: navigatorDispatch => dispatch => {
    dispatch({
      type: actions.LOGIN_SUCCESS
    });
    navigatorDispatch(
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
  }
};

const actionCreators = {
  login: (email, password, navigatorDispatch) => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await loginService(email, password);
    if (response.ok) {
      dispatch(privateActionCreators.loginSuccess(navigatorDispatch));
    } else {
      dispatch(privateActionCreators.loginFailure(response.problem));
    }
  }
};

export default actionCreators;
