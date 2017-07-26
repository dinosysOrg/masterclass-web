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
  case types.FETCHING_USER_SUCCESS:
    return {
      ...state,
      data: action.payload.results,
    };
  case types.FETCHING_USER_FAILURE:
    return {
      ...state,
      error: true,
    };
  case types.LOGIN_REQUEST_SUCCESS:
    return {
      ...state,
      userInfo: action.payload,
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
