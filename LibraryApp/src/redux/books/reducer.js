import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  books: []
};

const initialState = completeState(stateDescription);

const reducerDescription = { primaryActions: [actions.GET_BOOKS] };

export default createReducer(immutable(initialState), completeReducer(reducerDescription));
