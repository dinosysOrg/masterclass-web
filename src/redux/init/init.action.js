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
 * action save Auth.
 * @param {Object} json
 * @return {Object} response
 */
export function saveAuth(json) {
  const token = json.xhr.getResponseHeader('Access-Token');
  const client = json.xhr.getResponseHeader('Client');
  const expiry = json.xhr.getResponseHeader('Expiry');
  const tokenType = json.xhr.getResponseHeader('Token-Type');
  const Uid = json.xhr.getResponseHeader('Uid');
  const userName = json.response.data.name;
  const provider = json.response.data.provider;
  const active = json.response.data.active;
  return {
    type: types.SAVE_AUTHORIZED,
    payload: {token, client, expiry, tokenType, Uid, userName, provider, active},
  };
}
