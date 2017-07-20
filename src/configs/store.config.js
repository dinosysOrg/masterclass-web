/* @flow */
import {compose, createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import reducer from './reducer.config';
import initEpic from './epic.config';
const epicMiddleware = createEpicMiddleware(initEpic);
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
        epicMiddleware,
      )
    )
  );
  return store;
};

export default configureStore;
