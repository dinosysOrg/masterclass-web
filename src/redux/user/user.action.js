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
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: json,
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
