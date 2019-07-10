import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: null,
  booksError: null
};

export default function reducer(state = immutable(initialState), action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_BOOKS:
      return state.merge({ booksLoading: true });
    case actions.GET_BOOKS_SUCCESS:
      return state.merge({
        books: payload,
        booksLoading: false,
        booksError: null
      });
    case actions.GET_BOOKS_FAILURE:
      return state.merge({
        booksLoading: false,
        booksError: payload
      });
    default:
      return state;
  }
}
