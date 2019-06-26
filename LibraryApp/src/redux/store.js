import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import loginReducer from '@redux/login/reducer';
import { RootNavigator } from '@app/AppContainer';

import Reactotron from '../../ReactotronConfig';

const nav = createNavigationReducer(RootNavigator);

const reducers = {
  login: loginReducer,
  nav
};

const reducer = combineReducers(reducers);

const middlewares = [];

middlewares.push(thunk);
middlewares.push(createReactNavigationReduxMiddleware(store => store.nav));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares), Reactotron.createEnhancer())
);
