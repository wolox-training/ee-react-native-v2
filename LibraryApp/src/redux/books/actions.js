import * as BookService from '@services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

export const bookActions = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  })
};

export default bookActions;
