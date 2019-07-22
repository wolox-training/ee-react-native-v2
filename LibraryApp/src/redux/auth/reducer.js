import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  login: null,
  initialAuth: null
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.AUTH_INIT],
  override: {
    [actions.AUTH_INIT_SUCCESS]: (state, action) =>
      state.merge({
        initialAuth: action.payload,
        initialAuthLoading: false,
        initialAuthError: null,
        loginLoading: false
      }),
    [actions.LOGIN_SUCCESS]: (state, action) =>
      state.merge({
        login: action.payload,
        loginLoading: false,
        loginError: null
      }),
    [actions.LOGOUT]: state => state.merge({ ...initialState })
  }
};

export default createReducer(immutable(initialState), completeReducer(reducerDescription));
