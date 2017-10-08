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
 * An action creator - search started
 * @return {Object} action - with type SEARCH_PATH_REQUEST
 */
export function searchPathSuccess(path) {
  return {
    type: types.SEARCH_PATH_SUCCESS,
    payload: path
  };
};
/**
 * An action creator - search started
 * @return {Object} action - with type SEARCH_PATH_REQUEST
 */
export function searchPathFailed(error) {
  return {
    type: types.SEARCH_PATH_FAILED,
    payload: error
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
/**
 * An action creator - fetchInstrument
 */
export function fetchInstrument() {
  return {
    type: types.FETCH_INSTRUMENT_REQUEST,
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchInstrumentSuccess(data) {
  return {
    type: types.FETCH_INSTRUMENT_SUCCESS,
    payload: data
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchInstrumentFailed(error) {
  return {
    type: types.FETCH_INSTRUMENT_FAILED,
    payload: error
  };
};
/**
 * An action creator - fetchInstrument
 */
export function fetchMyCourses(data) {
  return {
    type: types.FETCH_COURSES_REQUEST,
    payload: data
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchMyCoursesSuccess(data) {
  return {
    type: types.FETCH_COURSES_SUCCESS,
    payload: data
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchMyCoursesFailed(error) {
  return {
    type: types.FETCH_COURSES_FAILED,
    payload: error
  };
};
/**
 * An action creator - subscribePathRequest
 */
export function subscribePathRequest(id) {
  return {
    type: types.SUBSCRIBE_PATH_REQUEST,
    payload: id
  };
};
/**
 * An action creator - subscribePathSuccess
 */
export function subscribePathSuccess() {
  return {
    type: types.SUBSCRIBE_PATH_SUCCESS,
  };
};
/**
 * An action creator - subscribePathFailed
 */
export function subscribePathFailed(error) {
  return {
    type: types.SUBSCRIBE_PATH_FAILED,
    payload: error
  };
};
/**
 * An action creator - unsubscribePathRequest
 */
export function unsubscribePathRequest(id) {
  return {
    type: types.UNSUBSCRIBE_PATH_REQUEST,
    payload: id
  };
};
/**
 * An action creator - unsubscribePathSuccess
 */
export function unsubscribePathSuccess() {
  return {
    type: types.UNSUBSCRIBE_PATH_SUCCESS,
  };
};
/**
 * An action creator - unsubscribePathSuccess
 */
export function unsubscribePathFailed(error) {
  return {
    type: types.UNSUBSCRIBE_PATH_FAILED,
  };
};
/**
 * An action creator - fetchInstrument
 */
export function fetchOverallProgress(id) {
  return {
    type: types.FETCH_OVERALL_PROGRESS_REQUEST,
    payload: id
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchOverallProgressSuccess(data) {
  return {
    type: types.FETCH_OVERALL_PROGRESS_SUCCESS,
    payload: data
  };
};
/**
 * An action creator - fetchInstrumentSuccess
 */
export function fetchOverallProgressFailed(error) {
  return {
    type: types.FETCH_OVERALL_PROGRESS_FAILED,
    payload: error
  };
};
/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_PRACTICE_REQUEST
 */
export function fetchPractice(data) {
  return {
    type: types.FETCH_PRACTICE_REQUEST,
    payload: data
  };
};
/**
 * An action creator - fetching success
 * @return {Object} action - with type FETCH_PRACTICE_SUCCESS
 */
export function fetchPracticeSuccess(payload) {
  return {
    type: types.FETCH_PRACTICE_SUCCESS,
    payload: payload
  };
};
/**
 * An action creator - fetching failed
 * @return {Object} action - with type FETCH_PRACTICE_FAILED
 */
export function fetchPracticeFailed(error) {
  return {
    type: types.FETCH_PRACTICE_FAILED,
    payload: error
  };
};
/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_SHEET_REQUEST
 */
export function fetchSheet(data) {
  return {
    type: types.FETCH_SHEET_REQUEST,
    payload: data
  };
};
/**
 * An action creator - fetching success
 * @return {Object} action - with type FETCH_SHEET_SUCCESS
 */
export function fetchSheetSuccess(payload) {
  return {
    type: types.FETCH_SHEET_SUCCESS,
    payload: payload
  };
};
/**
 * An action creator - fetching failed
 * @return {Object} action - with type FETCH_SHEET_FAILED
 */
export function fetchSheetFailed(error) {
  return {
    type: types.FETCH_SHEET_FAILED,
    payload: error
  };
};