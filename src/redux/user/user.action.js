import * as types from './user.types';
/**
 * action login request
 * @param {Object} response
 * @return {Object}
*/
export function loginRequest(response) {
  return {
    type: types.LOGIN_REQUEST,
    payload: response,
  };
}
/**
 * action login success
 * @param {Object} json
 * @return {Object}
*/
export function loginRequestSuccess(json) {
  const userName = json.response.data.name;
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: {userName},
  };
}
/**
 * action login failure
 * @param {Object} error
 * @return {Object}
*/
export function loginRequestFailure(error) {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    payload: error.xhr.response.errors[0],
  };
}
/**
 * action signup request
 * @param {Object} response
 * @return {Object}
*/
export function signupRequest(response) {
  return {
    type: types.SIGNUP_REQUEST,
    payload: response,
  };
}
/**
 * action signup success
 * @param {Object} json
 * @return {Object}
*/
export function signupRequestSuccess(json) {
  return {
    type: types.SIGNUP_REQUEST_SUCCESS,
    payload: json,
  };
}
/**
 * action signup fail
 * @param {Object} error
 * @return {Object}
*/
export function signupRequestFailure(error) {
  return {
    type: types.SIGNUP_REQUEST_FAILURE,
    payload: error,
  };
}
/**
 * action signup fail
 * @param {Object} error
 * @return {Object}
*/
export function signOut() {
  return {
    type: types.SIGN_OUT,
  };
}
/**
 * action hide modal.
 * @param {Object} response
 * @return {Object} response
 */
export function checkAuth(response) {
  return {
    type: types.AUTHORIZED,
    payload: response,
  };
}
/**
 * action hide modal.
 * @param {Object} response
 * @return {Object} response
 */
export function clearError() {
  return {
    type: types.CLEAR_ERROR,
  };
}
/**
 * action FB request
 * @param {Object} response
 * @return {Object}
*/
export function fbRequest(response) {
  return {
    type: types.LOGIN_FB_REQUEST,
    payload: response,
  };
}
/**
 * action FB success
 * @param {Object} json
 * @return {Object}
*/
export function fbRequestSuccess(json) {
  const userName = json.response.name;
  return {
    type: types.LOGIN_FB_REQUEST_SUCCESS,
    payload: {userName},
  };
}
/**
 * action FB fail
 * @param {Object} error
 * @return {Object}
*/
export function fbRequestFailure(error) {
  return {
    type: types.LOGIN_FB_REQUEST_FAILURE,
    payload: error,
  };
}

/**
 * action FETCH PATH THAT USER REGISTERED
 * @param {Object} error
 * @return {Object}
*/
export function fetchPathRequest() {
  return {
    type: types.FETCH_PATH_REQUEST,
  };
}

/**
 * action FETCH PATH REQUEST SUCCESS
 * @param {Object} response
 * @return {Object}
*/
export function fetchPathRequestSuccess(response) {
  return {
    type: types.FETCH_PATH_REQUEST_SUCCESS,
    payload: response,
  };
}

/**
 * action FETCH PATH REQUEST FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function fetchPathRequestFailure(error) {
  return {
    type: types.FETCH_PATH_REQUEST_FAILURE,
    payload: error,
  };
}

/**
 * action FETCH USER INFO THAT USER LOGGED IN
 * @param {Object} error
 * @return {Object}
*/
export function fetchUserInfoRequest() {
  return {
    type: types.FETCH_USERINFO_REQUEST,
  };
}

/**
 * action FETCH USER INFO REQUEST SUCCESS
 * @param {Object} response
 * @return {Object}
*/
export function fetchUserInfoRequestSuccess(response) {
  return {
    type: types.FETCH_USERINFO_REQUEST_SUCCESS,
    payload: response,
  };
}

/**
 * action FETCH USER INFO REQUEST SUCCESS FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function fetchUserInfoRequestFailure(error) {
  return {
    type: types.FETCH_USERINFO_REQUEST_FAILURE,
    payload: error,
  };
}
/**
 * action FETCH QUIZ REQUEST
 * @param {Object} error
 * @return {Object}
*/
export function fetchQuizRequest() {
  return {
    type: types.FETCH_QUIZ_REQUEST,
  };
}
/**
 * action FETCH QUIZ REQUEST SUCCESS
 * @param {Object} response
 * @return {Object}
*/
export function fetchQuizSuccess(response) {
  return {
    type: types.FETCH_QUIZ_REQUEST_SUCCESS,
    payload: response,
  };
}
/**
 * action FETCH QUIZ REQUEST FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function fetchQuizFailure(error) {
  return {
    type: types.FETCH_QUIZ_REQUEST_FAILURE,
    payload: error,
  };
}
/**
 * action SAVE QUIZ REQUEST
 * @param {Object} data
 * @return {Object}
*/
export function saveQuizRequest(data) {
  return {
    type: types.SAVE_QUIZ_REQUEST,
    payload: data,
  };
}
/**
 * action SAVE QUIZ REQUEST SUCCESS
 * @return {Object}
*/
export function saveQuizSuccess() {
  return {
    type: types.SAVE_QUIZ_REQUEST_SUCCESS,
  };
}
/**
 * action SAVE QUIZ REQUEST FAILURE
 * @param {Object} error
 * @return {Object}
*/
export function saveQuizFailure(error) {
  return {
    type: types.SAVE_QUIZ_REQUEST_FAILURE,
    payload: error,
  };
}

/**
 * action HIDE QUIZ LOADING
 * @param {Object} error
 * @return {Object}
*/
export function hideLoadingQuiz() {
  return {
    type: types.HIDE_LOADING_QUIZ,
  };
}

/**
 * save unserinfo
 * @param {Object} data
 * @return {Object}
*/
export function saveUserInfoRequest(data) {
  return {
    type: types.SAVE_USERINFO_REQUEST,
    payload: data,
  };
}

/**
 * save unserinfo
 * @param {Object} error
 * @return {Object}
*/
export function saveUserInfoFailure(error) {
  return {
    type: types.SAVE_USERINFO_REQUEST_FAILURE,
    payload: error,
  };
}
