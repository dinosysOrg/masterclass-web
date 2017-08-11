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
        completed: [],
        in_progress: [],
      },
    };
  case types.FETCH_PATH_REQUEST_SUCCESS:
    return {
      ...state,
      myPath: {
        completed: action.payload.completed,
        in_progress: action.payload.in_progress,
      },
    };
  case types.FETCH_PATH_REQUEST_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}
