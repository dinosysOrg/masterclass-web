import * as types from './path.types';
import data from '../../spec/mockdata/path';

/**
 * This epic defines the whole operation of fetching path from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @param {Object} store 
 * @param {Object} dependencies
 * @return {Object} action stream
 */
const fetchPathEpic = (action$, store, dependencies) => {
  return action$.ofType(types.FETCH_PATH).delay(500).mapTo({
    type: types.FETCH_PATH_SUCCESS,
    payload: data,
  });
};

export {
  fetchPathEpic,
};
