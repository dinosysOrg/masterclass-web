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
      loginError: null,
    };
  case types.LOGIN_REQUEST_SUCCESS:
    return {
      ...state,
      loginStatus: true,
      userInfo: action.payload,
    };
  case types.LOGIN_REQUEST_FAILURE:
    return {
      ...state,
      loginError: action.payload,
    };
  case types.SIGNUP_REQUEST:
    return {
      ...state,
      signUpError: null,
    };
  case types.SIGNUP_REQUEST_SUCCESS:
    return {
      ...state,
      registerSuccess: true,
    };
  case types.SIGNUP_REQUEST_FAILURE:
    return {
      ...state,
      signUpError: action.payload,
    };
  case types.SIGN_OUT:
    return {
      signOut: true,
    };
  case types.AUTHORIZED:
    return {
      ...state,
      loginStatus: true,
      userInfo: action.payload,
    };
  case types.CLEAR_ERROR:
    return {
      ...state,
      loginError: null,
      signUpError: null,
    };
  case types.LOGIN_FB_REQUEST:
    return {
      ...state,
    };
  case types.LOGIN_FB_REQUEST_SUCCESS:
    return {
      ...state,
      loginStatus: true,
      userInfo: action.payload,
    };
  case types.LOGIN_FB_REQUEST_FAILURE:
    return {
      ...state,
    };
  case types.FETCH_PATH_REQUEST:
    return {
      ...state,
      myPath: {
        recommended: [],
        completed: [],
        in_progress: [],
        saved: [],
      },
    };
  case types.FETCH_PATH_REQUEST_SUCCESS:
    return {
      ...state,
      myPath: {
        recommended: action.payload.recommended,
        completed: action.payload.completed,
        in_progress: action.payload.in_progress,
        saved: action.payload.saved,
      },
    };
  case types.FETCH_PATH_REQUEST_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_USERINFO_REQUEST_SUCCESS:
    return {
      ...state,
      userInfo: Object.assign({}, state.userInfo, action.payload),
    };
  case types.FETCH_USERINFO_REQUEST_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  case types.FETCH_QUIZ_REQUEST_SUCCESS:
    return {
      ...state,
      quiz: action.payload,
    };
  case types.SAVE_QUIZ_REQUEST_SUCCESS:
    return {
      ...state,
      quizLoading: true,
    };
  case types.HIDE_LOADING_QUIZ:
    return {
      ...state,
      quizLoading: false,
    };
  case types.SAVE_USERINFO_REQUEST_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}
