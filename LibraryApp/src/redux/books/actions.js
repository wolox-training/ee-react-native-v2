import * as BookService from '@services/BookService';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

const privateBookActions = {
  getBooksSuccess: books => ({ type: actions.GET_BOOKS_SUCCESS, payload: books }),
  getBooksFailure: error => ({ type: actions.GET_BOOKS_FAILURE, payload: error })
};

export const bookActions = {
  getBooks: () => async dispatch => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await BookService.getBooks();
    if (response.ok) dispatch(privateBookActions.getBooksSuccess(response.data));
    else dispatch(privateBookActions.getBooksFailure(response.problem));
    // debugger;
  }
};

export default bookActions;
