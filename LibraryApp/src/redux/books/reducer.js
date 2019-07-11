import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  books: [],
  searchString: ''
};

const initialState = completeState(stateDescription, ['searchString']);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SET_SEARCH_STRING]: (state, action) => ({ ...state, searchString: action.payload })
  }
};

export default createReducer(immutable(initialState), completeReducer(reducerDescription));
