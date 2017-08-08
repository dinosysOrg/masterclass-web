import * as types from './user.types';
/**
 * action login request
 * @param {Object} response
 * @return {Object}
*/
export function loginRequest(response) {
  return {
    type: types.LOGIN_REQUEST,
    payload: response,
  };
}
/**
 * action login success
 * @param {Object} json
 * @return {Object}
*/
export function loginRequestSuccess(json) {
  const userName = json.response.data.name;
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: {userName},
  };
}
/**
 * action login failure
 * @param {Object} error
 * @return {Object}
*/
export function loginRequestFailure(error) {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    payload: error.xhr.response.errors[0],
  };
}
/**
 * action signup request
 * @param {Object} response
 * @return {Object}
*/
export function signupRequest(response) {
  return {
    type: types.SIGNUP_REQUEST,
    payload: response,
  };
}
/**
 * action signup success
 * @param {Object} json
 * @return {Object}
*/
export function signupRequestSuccess(json) {
  return {
    type: types.SIGNUP_REQUEST_SUCCESS,
    payload: json,
  };
}
/**
 * action signup fail
 * @param {Object} error
 * @return {Object}
*/
export function signupRequestFailure(error) {
  return {
    type: types.SIGNUP_REQUEST_FAILURE,
    payload: error,
  };
}
/**
 * action signup fail
 * @param {Object} error
 * @return {Object}
*/
export function signOut() {
  return {
    type: types.SIGN_OUT,
  };
}
/**
 * action hide modal.
 * @param {Object} response
 * @return {Object} response
 */
export function checkAuth(response) {
  return {
    type: types.AUTHORIZED,
    payload: response,
  };
}
/**
 * action hide modal.
 * @param {Object} response
 * @return {Object} response
 */
export function clearError() {
  return {
    type: types.CLEAR_ERROR,
  };
}
/**
 * action FB request
 * @param {Object} response
 * @return {Object}
*/
export function fbRequest(response) {
  return {
    type: types.LOGIN_FB_REQUEST,
    payload: response,
  };
}
/**
 * action FB success
 * @param {Object} json
 * @return {Object}
*/
export function fbRequestSuccess(json) {
  const userName = json.response.name;
  return {
    type: types.LOGIN_FB_REQUEST_SUCCESS,
    payload: {userName},
  };
}
/**
 * action FB fail
 * @param {Object} error
 * @return {Object}
*/
export function fbRequestFailure(error) {
  return {
    type: types.LOGIN_FB_REQUEST_FAILURE,
    payload: error,
  };
}

/**
 * action FETCH PATH THAT USER REGISTERED
 * @param {Object} error
 * @return {Object}
*/
export function fetchPathRequest() {
  return {
    type: types.FETCH_PATH_REQUEST,
  };
}

/**
 * action FETCH PATH REQUEST SUCCESS
 * @param {Object} response
 * @return {Object}
*/
export function fetchPathRequestSuccess(response) {
  return {
    type: types.FETCH_PATH_REQUEST_SUCCESS,
    payload: response,
  };
}

/**
 * action FETCH PATH REQUEST FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function fetchPathRequestFailure(error) {
  return {
    type: types.FETCH_PATH_REQUEST_FAILURE,
    payload: error,
  };
}
