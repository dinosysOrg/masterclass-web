/* @flow */
import {compose, createStore} from 'redux';
import reducers from './reducer.config';
/**
 * config store redux
 * @param {Object} initialState
 * @return {Object}
*/
function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  return store;
};

export default configureStore;