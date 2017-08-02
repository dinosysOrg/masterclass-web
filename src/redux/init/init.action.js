import * as types from './init.types';
/**
 * action show loading
 * @return {Object}
 */
export function showLoading() {
  return {
    type: types.SHOW_LOADING,
  };
}
/**
 * action hide loading
 * @return {Object}
 */
export function hideLoading() {
  return {
    type: types.HIDE_LOADING,
  };
};
/**
 * action show modal
 * @param {Object} response
 * @return {Object}
 */
export function showModal(response) {
  return {
    type: types.SHOW_MODAL,
    payload: response,
  };
}
/**
 * action hide modal.
 * @param {Object} response
 * @return {Object} response
 */
export function hideModal(response) {
  return {
    type: types.HIDE_MODAL,
    payload: response,
  };
}

