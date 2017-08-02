import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI, signUpAPI} from './user.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';
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
          .mergeMap((response) =>
            of(actions.loginRequestSuccess(response), actionInit.hideModal())
              .do(storeConfig.setUserLocal(response.xhr, response))
          )
          .catch((error) => of(actions.loginRequestFailure(error))),
        of(actionInit.hideLoading())
      )
    );
/**
 * action sign out
 * @param {any} action$
 * @return {Object}
*/
const signOutEpic = (action$) =>
  action$.ofType(types.SIGN_OUT)
    .mergeMap(() =>
      of(actionInit.hideModal())
        .do(storeConfig.clearUserLocal())
    );
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
export {
  loginRequestEpic,
  signOutEpic,
  signupRequestEpic,
};
