// import {ajax} from 'rxjs/observable/dom/ajax';

import types from './types';
// import {getPathAPI} from './api';

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
  // return action$.ofType(types.FETCH_PATH).mergeMap((action) =>
  //   ajax
  //     .getJSON('shoule_be_api_path')
  //     .map((response) => ({
  //       type: types.FETCH_PATH_SUCCESS,
  //       payload: response,
  //     }))
  //     .catch((error) => ({
  //       type: types.FETCH_PATH_FAILED,
  //       payload: error,
  //     }))
  // );

  return action$.ofType(types.FETCH_PATH).delay(500).mapTo({
    type: types.FETCH_PATH_SUCCESS,
    payload: data,
  });
};

export default {
  fetchPathEpic,
};
