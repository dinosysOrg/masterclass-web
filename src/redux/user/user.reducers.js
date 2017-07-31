import * as types from './user.types';

const initialState = {};
/**
 * init reducer redux
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
*/
export default function init(state = initialState, action) {
  switch (action.type) {
  case types.LOGIN_REQUEST:
    return {
      ...state,
      error: null,
    };
  case types.LOGIN_REQUEST_SUCCESS:
    return {
      ...state,
    };
  case types.LOGIN_REQUEST_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}
