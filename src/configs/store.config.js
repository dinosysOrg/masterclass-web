/* @flow */
import {compose, createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import reducer from './reducer.config';
import initEpic from './epic.config';
import {nprogressMiddleware} from 'redux-nprogress';
import {userMiddleWare} from '../redux/middleware/user';
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router';
const epicMiddleware = createEpicMiddleware(initEpic);
const reactRouterMiddleware = routerMiddleware(browserHistory);
/**
 * config store redux
 * @param {Object} initialState
 * @return {Object}
*/
function configureStore(initialState) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        userMiddleWare,
        nprogressMiddleware(),
        epicMiddleware,
        reactRouterMiddleware,
      )
    )
  );
  return store;
};

export default configureStore;
