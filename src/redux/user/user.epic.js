import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI, signUpAPI, loginFB, getUserPath, getQuizAPI, userAPI} from './user.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';
import {push} from 'react-router-redux';
import {beginTask, endTask} from 'redux-nprogress';

/**
 * action save user info
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const putUserInfoRequestEpic = (action$, store) =>
  action$.ofType(types.SAVE_USERINFO_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.put(`${userAPI}${storeConfig.getUserLocal().id}`, data.payload, storeConfig.setHeader())
          .map((json) => actions.fetchUserInfoRequest())
          .catch((error) => of(actions.saveUserInfoFailure(error))),
        of(store.dispatch(endTask())),
      )
    );

/**
 * action fetch user info
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const getUserInfoRequestEpic = (action$, store) =>
  action$.ofType(types.FETCH_USERINFO_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${userAPI}${storeConfig.getUserLocal().id}`, storeConfig.setHeader())
          .map((json) => actions.fetchUserInfoRequestSuccess(json.response))
          .catch((error) => of(actions.fetchUserInfoRequestFailure(error))),
        of(store.dispatch(endTask())),
      )
    );
/**
 * action fetch user path
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const myPathRequestEpic = (action$, store) =>
  action$.ofType(types.FETCH_PATH_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(getUserPath, storeConfig.setHeader())
          .map((json) => actions.fetchPathRequestSuccess(json.response))
          .catch((error) => of(actions.fetchPathRequestFailure(error))),
        of(store.dispatch(endTask())),
      )
    );
/**
 * action fetch data
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const loginRequestEpic = (action$, store) =>
  action$.ofType(types.LOGIN_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.post(loginAPI, data.payload)
          .mergeMap((json) =>
            of(actions.loginRequestSuccess(json), actionInit.hideModal())
              .do(storeConfig.setUserLocal(json.xhr, json.response.data.name, json.response.data.id))
          )
          .catch((error) => of(actions.loginRequestFailure(error))),
        of(store.dispatch(endTask())),
      )
    );
/**
 * action sign out
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const signOutEpic = (action$, store) =>
  action$.ofType(types.SIGN_OUT)
    .do(() => {
      storeConfig.clearUserLocal();
      store.dispatch(push('/'));
    })
    .ignoreElements();
/**
 * action sign up request
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const signupRequestEpic = (action$, store) =>
  action$.ofType(types.SIGNUP_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.post(signUpAPI, data.payload)
          .map((response) => actions.signupRequestSuccess(response))
          .catch((error) => of(actions.signupRequestFailure(error.xhr.response.errors.full_messages))),
        of(store.dispatch(endTask())),
      )
    );
/**
 * action FB request
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const fbRequestEpic = (action$, store) =>
  action$.ofType(types.LOGIN_FB_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.post(`${loginFB}?access_token=${data.payload}`)
          .mergeMap((json) =>
            of(actions.fbRequestSuccess(json), actionInit.hideModal())
              .do(storeConfig.setUserLocal(json.xhr, json.response.name))
          )
          .catch((error) => of(actions.fbRequestFailure(error.xhr.response.errors))),
        of(store.dispatch(endTask())),
      )
    );

/**
 * action get Quiz
 * @param {any} action$
 * @param {any} store
 * @return {Object}
*/
const getQuizRequestEpic = (action$, store) =>
  action$.ofType(types.FETCH_QUIZ_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getQuizAPI}`, storeConfig.setHeader())
          .map((json) => actions.fetchQuizSuccess(json.xhr.response))
          .catch((error) => of(actions.fetchQuizFailure(error))),
        of(store.dispatch(endTask())),
      )
    );

  /**
   * action save Quiz
   * @param {any} action$
   * @param {any} store
   * @return {Object}
  */
const saveQuizEpic = (action$, store) =>
  action$.ofType(types.SAVE_QUIZ_REQUEST)
    .mergeMap((data) =>
      concat$(
        ajax.post(`${getQuizAPI}`, data.payload, storeConfig.setHeader())
          .map(() => actions.saveQuizSuccess())
          .catch((error) => of(actions.saveQuizFailure(error))),
      )
    );

export {
  myPathRequestEpic,
  loginRequestEpic,
  signOutEpic,
  signupRequestEpic,
  fbRequestEpic,
  getUserInfoRequestEpic,
  getQuizRequestEpic,
  saveQuizEpic,
  putUserInfoRequestEpic,
};
