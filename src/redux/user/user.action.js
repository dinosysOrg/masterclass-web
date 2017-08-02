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
  const token = json.xhr.getResponseHeader('Access-Token');
  const client = json.xhr.getResponseHeader('Client');
  const expiry = json.xhr.getResponseHeader('Expiry');
  const tokenType = json.xhr.getResponseHeader('Token-Type');
  const Uid = json.xhr.getResponseHeader('Uid');
  const userName = json.response.data.name;
  const provider = json.response.data.provider;
  const active = json.response.data.active;
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: {token, client, expiry, tokenType, Uid, userName, provider, active},
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
