import * as types from './path.types';

/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_HOME_PATH
 */
export function fetchHomePath() {
  return {
    type: types.FETCH_HOME_PATH,
  };
};

/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_BROWSE_PATH
 */
export function fetchBrowsePath() {
  return {
    type: types.FETCH_BROWSE_PATH,
  };
};

/**
 * An action creator - search started
 * @return {Object} action - with type SEARCH_PATH_REQUEST
 */
export function searchPath(pathName) {
  return {
    type: types.SEARCH_PATH_REQUEST,
    payload: pathName
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
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_BROWSE_PATH
 */
export function fetchOverviewPath(id) {
  return {
    type: types.FETCH_OVERVIEW_REQUEST,
    payload: id
  };
};
/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_BROWSE_PATH
 */
export function fetchOverviewPathSuccess(data) {
  return {
    type: types.FETCH_OVERVIEW_SUCCESS,
    payload: data
  };
};
/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_BROWSE_PATH
 */
export function fetchOverviewPathFailed(error) {
  return {
    type: types.FETCH_OVERVIEW_FAILED,
    payload: error
  };
};
