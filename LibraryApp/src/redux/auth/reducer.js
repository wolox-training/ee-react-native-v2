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
    [actions.LOGOUT]: state => state.merge({ ...initialState })
  }
};

export default createReducer(immutable(initialState), completeReducer(reducerDescription));
