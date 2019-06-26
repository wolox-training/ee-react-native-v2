import { login as loginService } from '@services/LoginService';
import { NavigationActions } from 'react-navigation';
import Routes from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
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
  }
};

const actionCreators = {
  login: (email, password) => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await loginService(email, password);
    if (response?.data?.data) {
      dispatch(privateActionCreators.loginSuccess());
    } else {
      dispatch(privateActionCreators.loginFailure(response.data.errors[0]));
    }
  }
};

export default actionCreators;
