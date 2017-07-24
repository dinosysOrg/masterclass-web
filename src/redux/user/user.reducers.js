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
  case types.FETCHING_USER:
    return {
      ...state,
      data: [],
      isFetching: true,
    };
  case types.FETCHING_USER_SUCCESS:
    return {
      ...state,
      isFetching: false,
      data: action.payload.results,
    };
  case types.FETCHING_USER_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  default:
    return state;
  }
}
