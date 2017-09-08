import * as types from './path.types';

/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_PATH
 */
export function fetchPath() {
  return {
    type: types.FETCH_PATH,
  };
};

/**
 * An action creator - fetching finished
 * @param {Object} path - the path object receive from api
 * @return {Object} action - with type FETCH_PATH_SUCCESS & data is the received path
 */
export function fetchPathSuccess(path) {
  return {
    type: types.FETCH_PATH_SUCCESS,
    payload: path,
  };
};

/**
 * An action creator - fetching failed
 * @param {Error} error - error from fetching api (if have) 
 * @return {Object} action - with type FETCH_PATH_FAILED & data is the received error
 */
export function fetchPathFailed(error) {
  return {
    type: types.FETCH_PATH_FAILED,
    payload: error,
  };
};
