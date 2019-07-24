import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import { reducer as formReducer } from 'redux-form';
import authReducer from '@redux/auth/reducer';
import booksReducer from '@redux/books/reducer';
import { RootNavigator } from '@app/AppContainer';

import Reactotron from '../../ReactotronConfig';

const nav = createNavigationReducer(RootNavigator);

configureMergeState((state, diff) => state.merge(diff));

const reducers = {
  auth: authReducer,
  books: booksReducer,
  nav,
  form: formReducer
};

const reducer = combineReducers(reducers);

const middlewares = [];
const enhancers = [];

middlewares.push(createReactNavigationReduxMiddleware(store => store.nav));
middlewares.push(thunk);
middlewares.push(fetchMiddleware);

enhancers.push(applyMiddleware(...middlewares));

const store = createStore(
  reducer,
  __DEV__
    ? compose(
        ...enhancers,
        Reactotron.createEnhancer()
      )
    : compose(...enhancers)
);

export default store;
