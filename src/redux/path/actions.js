import types from './types';

/**
 * An action creator - fetching started
 * @param {string} id - identify of the path
 * @return {Object} action - with type FETCH_PATH
 */
const fetchPath = (id) => {
  return {
    type: types.FETCH_PATH,
  };
};

/**
 * An action creator - fetching finished
 * @param {Object} path - the path object receive from api
 * @return {Object} action - with type FETCH_PATH_SUCCESS & data is the received path
 */
const fetchPathSuccess = (path) => {
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
const fetchPathFailed = (error) => {
  return {
    type: types.FETCH_PATH_FAILED,
    payload: error,
  };
};

export default {
  fetchPath,
  fetchPathSuccess,
  fetchPathFailed,
};
