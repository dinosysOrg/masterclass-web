import * as types from './loading.types';
/**
 * action fetch login
 * @return {Object}
 */
export function showModal() {
  return {
    type: types.SHOW_MODAL,
  };
}
/**
 * action fetch login
 * @return {Object}
 */
export function hideModal() {
  return {
    type: types.HIDE_MODAL,
  };
};
