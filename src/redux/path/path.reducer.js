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
  case types.FETCH_HOME_PATH:
    return {
      ...state,
    };
  case types.FETCH_BROWSE_PATH:
    return {
      ...state,
    };
  case types.SEARCH_PATH_REQUEST:
    return {
      ...state,
    };
  case types.FETCH_PATH_SUCCESS:
    return {
      ...state,
      paths: {
        search: action.payload.search || [],
        recommend: action.payload.recommend || [],
        popular: action.payload.popular || [],
        latest: action.payload.latest || [],
        guitar: action.payload.guitar || [],
        vocals: action.payload.vocals || [],
        my_skills: action.payload.my_skills || [],
      },
    };
  case types.FETCH_PATH_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_OVERVIEW_REQUEST:
    return {
      ...state,
      pathOverview: {},
    };
  case types.FETCH_OVERVIEW_SUCCESS:
    return {
      ...state,
      pathOverview: action.payload,
    };
  case types.SEARCH_PATH_SUCCESS:
    return {
      ...state,
      paths: {
        ...state.paths,
        ...Object.assign({}, action.payload),
      }
    };
  case types.FETCH_INSTRUMENT_REQUEST:
    return {
      ...state,
      listInstrument: {}
    };
  case types.FETCH_INSTRUMENT_SUCCESS:
    return {
      ...state,
      listInstrument: action.payload
    };
  case types.FETCH_INSTRUMENT_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_PRACTICE_SUCCESS:
    return {
      ...state,
      practice: {
        practices: action.payload.practices,
        level: action.payload.level,
        instrument: action.payload.instrument
      }  
    };
  case types.FETCH_PRACTICE_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_COURSES_REQUEST:
    return {
      ...state,
      fetchCoursesStatus: false,
      myCourses: {
        courses: [],
        last_course_visited: []
      }
  }
  case types.FETCH_COURSES_SUCCESS:
    return {
      ...state,
      fetchCoursesStatus: true,
      myCourses: action.payload
    };
  case types.FETCH_COURSES_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_OVERALL_PROGRESS_REQUEST:
    return {
      ...state,
      fetchOverrallProgress: false,
      overallProgress: {},
    };
  case types.FETCH_OVERALL_PROGRESS_SUCCESS:
    return {
      ...state,
      fetchOverrallProgress: true,
      overallProgress: action.payload,
    };
  case types.FETCH_SHEET_SUCCESS:
    return {
      ...state,
      sheetURL: action.payload,
    };
  case types.FETCH_SHEET_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default path;