import * as types from './user.types';
/**
 * action fetch login
 * @param {Object} response
 * @return {Object}
*/
export function loginRequest(response) {
  return {
    type: types.LOGIN_REQUEST,
    payload: {...response},
  };
}
/**
 * action fetch login success
 * @param {Object} json
 * @return {Object}
*/
export function loginRequestSuccess(json) {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: {...json.response.data},
  };
}
/**
 * action fetch login failure
 * @param {Object} error
 * @return {Object}
*/
export function loginRequestFailure(error) {
  console.log(error);
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    payload: {...error.xhr.response.errors},
  };
}
