import * as types from './path.types';

const initPathState = {};

/**
 * Path Reducer
 * @param {Object} state - current state 
 * @param {Object} action 
 * @return {Object} state - new state
 */
const path = (state = initPathState, action) => {
  switch (action.type) {
  case types.FETCH_PATH_SUCCESS:
    return action.payload;
  case types.FETCH_BROWSE_PATH:
    return {
      ...state,
      browsePath: {
        recommend: [],
        popular: [],
        latest: [],
        guitar: [],
        vocals: [],
      },
    };
  case types.FETCH_BROWSE_PATH_SUCCESS:
    return {
      ...state,
      browsePath: {
        recommend: action.payload.recommend,
        popular: action.payload.popular,
        latest: action.payload.latest,
        guitar: action.payload.guitar,
        vocals: action.payload.vocals,
      },
    };
  case types.FETCH_BROWSE_PATH_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default path;
