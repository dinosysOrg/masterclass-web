import * as types from './user.types';
/**
 * action fetch data
 * @return {Object}
*/
export function fetchUser() {
  return {
    type: types.FETCHING_USER,
  };
}
/**
 * action fetch data success
 * @param {Object} response
 * @return {Object}
*/
export function fetchUserSuccess(response) {
  return {
    type: types.FETCHING_USER_SUCCESS,
    payload: {...response},
  };
}
/**
 * action fetch data failure
 * @param {Object} error
 * @return {Object}
*/
export function fetchUserFailure(error) {
  return {
    type: types.FETCHING_USER_FAILURE,
    payload: error,
  };
}
