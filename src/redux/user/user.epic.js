import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI, signUpAPI, loginFB, getUserPath} from './user.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';
import {push} from 'react-router-redux';
/**
 * action fetch user path
 * @param {any} action$
 * @return {Object}
*/
const myPathRequestEpic = (action$) =>
  action$.ofType(types.FETCH_PATH_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.get(getUserPath, storeConfig.setHeader())
          .map((json) => actions.fetchPathRequestSuccess(json.response))
          .catch((error) => of(actions.fetchPathRequestFailure(error))),
        of(actionInit.hideLoading())
      )
    );
/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const loginRequestEpic = (action$) =>
  action$.ofType(types.LOGIN_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.post(loginAPI, data.payload)
          .mergeMap((json) =>
            of(actions.loginRequestSuccess(json), actionInit.hideModal())
              .do(storeConfig.setUserLocal(json.xhr, json.response.data.name))
          )
          .catch((error) => of(actions.loginRequestFailure(error))),
        of(actionInit.hideLoading())
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
 * @return {Object}
*/
const signupRequestEpic = (action$) =>
  action$.ofType(types.SIGNUP_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.post(signUpAPI, data.payload)
          .map((response) => actions.signupRequestSuccess(response))
          .catch((error) => of(actions.signupRequestFailure(error.xhr.response.errors.full_messages))),
        of(actionInit.hideLoading())
      )
    );
/**
 * action FB request
 * @param {any} action$
 * @return {Object}
*/
const fbRequestEpic = (action$) =>
  action$.ofType(types.LOGIN_FB_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.post(`${loginFB}?access_token=${data.payload}`)
          .mergeMap((json) =>
            of(actions.fbRequestSuccess(json), actionInit.hideModal())
              .do(storeConfig.setUserLocal(json.xhr, json.response.name))
          )
          .catch((error) => of(actions.fbRequestFailure(error.xhr.response.errors))),
        of(actionInit.hideLoading())
      )
    );
export {
  myPathRequestEpic,
  loginRequestEpic,
  signOutEpic,
  signupRequestEpic,
  fbRequestEpic,
};
