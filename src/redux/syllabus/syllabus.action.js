import * as types from "./syllabus.types";

/**
 * An action creator - fetching started
 * @return {Object} action - with type FETCH_SYLLABUS_REQUEST
 */

 //Payload will be removed when API is available
export function fetchSyllabus(payload) {
  return {
    type: types.FETCH_SYLLABUS_REQUEST,
    payload: payload,
  };
}
/**
 * An action creator - fetching finished
 * @param {Object} data - the path object receive from api
 * @return {Object} action - with type FETCH_SYLlABUS_SUCCESS & data is the received path
 */
export function fetchSyllabusSuccess(data) {
  return {
    type: types.FETCH_SYLLABUS_SUCCESS,
    payload: data
  };
}

/**
   * An action creator - fetching failed
   * @param {Error} error - error from fetching api (if have) 
   * @return {Object} action - with type FETCH_SYLLABUS_FAILURE & data is the received error
   */
export function fetchSyllabusFailed(error) {
  return {
    type: types.FETCH_SYLLABUS_FAILURE,
    payload: error
  };
}
