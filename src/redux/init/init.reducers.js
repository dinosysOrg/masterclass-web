import * as types from './init.types';

const initialState = {
  modalName: null,
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
      modalName: action.payload,
    };
  case types.HIDE_MODAL:
    return {
      ...state,
      modalName: null,
    };
  default:
    return state;
  }
}
