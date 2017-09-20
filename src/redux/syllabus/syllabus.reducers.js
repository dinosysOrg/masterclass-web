import * as types from './syllabus.types';

const initialState = {};

/**
 * Syllabus Reducer
 * @param {Object} state - current state 
 * @param {Object} action 
 * @return {Object} state - new state
 */
const syllabus = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_SYLLABUS_REQUEST:
    return {
      ...state,
    };
  case types.FETCH_SYLLABUS_SUCCESS:
    return {
      ...state,
      syllabus: action.payload.syllabus,
      path: action.payload.path,
      nextSyllabus: action.payload.next_syllabus,
      prevSyllabus: action.payload.previous_syllabus,
    };
  case types.FETCH_SYLLABUS_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default syllabus;