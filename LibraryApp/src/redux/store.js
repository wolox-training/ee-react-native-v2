import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import authReducer from '@redux/auth/reducer';
import { RootNavigator } from '@app/AppContainer';

import Reactotron from '../../ReactotronConfig';

const nav = createNavigationReducer(RootNavigator);

const reducers = {
  auth: authReducer,
  nav
};

const reducer = combineReducers(reducers);

const middlewares = [];
const enhancers = [];

middlewares.push(createReactNavigationReduxMiddleware(store => store.nav));
middlewares.push(thunk);

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
