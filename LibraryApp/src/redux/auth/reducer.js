import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  loading: false,
  logged: false,
  authError: null,
  initialAuthLoading: false
};

const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.AUTH_INIT:
      return state.merge({
        initialAuthLoading: true
      });
    case actions.AUTH_INIT_SUCCESS:
      return state.merge({
        loading: false,
        logged: true,
        initialAuthLoading: false
      });
    case actions.AUTH_INIT_FAILURE:
      return state.merge({
        initialAuthLoading: false
      });
    case actions.LOGIN_REQUEST:
      return state.merge({
        loading: true,
        authError: null
      });
    case actions.LOGIN_SUCCESS:
      return state.merge({
        logged: true,
        loading: false
      });
    case actions.LOGIN_FAILURE:
      return state.merge({
        logged: false,
        loading: false,
        authError: action.payload
      });
    case actions.LOGOUT:
      return state.merge({ ...initialState });
    default:
      return state;
  }
};

export default reducer;
