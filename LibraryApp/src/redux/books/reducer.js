import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: null,
  booksError: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_BOOKS:
      return { ...state, booksLoading: true };

    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, booksLoading: false, booksError: null };

    case actions.GET_BOOKS_FAILURE:
      return { ...state, booksLoading: false, booksError: payload };

    default:
      return state;
  }
}
