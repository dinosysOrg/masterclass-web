import * as types from './path.types';

/**
 * An action creator - fetching started
 * @param {string} id - identify of the path
 * @return {Object} action - with type FETCH_PATH
 */
export function fetchPath(id) {
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

/**
 * action FETCH BROWSE PATH
 * @param {Object} error
 * @return {Object}
*/
export function fetchBrowsePathRequest() {
  return {
    type: types.FETCH_BROWSE_PATH,
  };
}

/**
 * action FETCH BROWSE PATH SUCCESS
 * @param {Object} response
 * @return {Object}
*/
export function fetchBrowsePathRequestSuccess(response) {
  return {
    type: types.FETCH_BROWSE_PATH_SUCCESS,
    payload: response,
  };
}

/**
 * action FETCH BROWSE PATH FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function fetchBrowsePathRequestFailure(error) {
  return {
    type: types.FETCH_BROWSE_PATH_FAILED,
    payload: error,
  };
}
