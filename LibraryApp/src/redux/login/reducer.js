import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  loading: false,
  logged: false,
  authError: null
};

const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return immutable(state).merge({
        loading: true,
        authError: null
      });
    case actions.LOGIN_SUCCESS:
      return immutable(state).merge({
        logged: true,
        loading: false
      });
    case actions.LOGIN_FAILURE:
      return immutable(state).merge({
        logged: false,
        loading: false,
        authError: action.payload
      });
    default:
      return state;
  }
};

export default reducer;
