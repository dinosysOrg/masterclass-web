import * as types from './init.types';

const initialState = {
  modalAuth: false,
};
/**
 * init reducer redux
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function init(state = initialState, action) {
  switch (action.type) {
  case types.SHOW_LOADING:
    return {
      ...state,
      showLoading: true,
    };
  case types.HIDE_LOADING:
    return {
      ...state,
      showLoading: false,
    };
  case types.SHOW_MODAL:
    return {
      ...state,
      [action.payload]: true,
    };
  case types.HIDE_MODAL:
    return {
      ...state,
      [action.payload]: false,
    };
  default:
    return state;
  }
}
