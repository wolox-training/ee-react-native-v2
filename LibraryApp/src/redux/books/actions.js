import * as BookService from '@services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['SET_SEARCH_STRING']), '@@BOOKS');

export const bookActions = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  }),
  setSearchString: value => dispatch => dispatch({ type: actions.SET_SEARCH_STRING, payload: value })
};

export default bookActions;
